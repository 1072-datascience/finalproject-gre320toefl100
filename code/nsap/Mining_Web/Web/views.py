# -*- coding: utf-8  -*-
from django.shortcuts import render
from django.shortcuts import render, render_to_response
import pandas as pd
import numpy as np
import sklearn
import matplotlib.pyplot as plt
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import StreamingHttpResponse, JsonResponse
from sklearn import linear_model
from sklearn.ensemble import RandomForestRegressor
import xgboost as xgb

from sklearn.metrics import mean_squared_error
from math import sqrt


def predict(testData):
    use_last_year_salary = False
    df = pd.read_csv("Web/all_data.csv")
    players = pd.read_csv("Web/Players-18-19.csv")
    df[['Salary']] = df[['Salary']].replace(0, np.nan)
    tmp = pd.DataFrame({'pts_per': [row['PTS'] / row['Game'] for index, row in df.iterrows()]})
    df = pd.concat([df, tmp], axis=1)
    df[['pts_per']] = df[['pts_per']].replace(0, np.nan)
    df = df[df.Salary != 0]
    if use_last_year_salary:
        df[['last_year_salary']] = df[['last_year_salary']].replace(0, np.nan)

    df = df.dropna()
    df = df.join(pd.get_dummies(df['Pos']))
    df['Salary'] = np.log(df['Salary'])
    df['salary_limit'] = np.log(df['salary_limit'])
    df_train, df_test = sklearn.model_selection.train_test_split(df, test_size=0.5)

    #players[['Salary']] = players[['Salary']].replace(0, np.nan)
    players[['G']] = players[['G']].replace(0, 1)
    tmp1 = pd.DataFrame({'pts_per': [row['PTS'] / row['G']
                                     for index, row in players.iterrows()]})
    players = pd.concat([players, tmp1], axis=1)
    players[['pts_per']] = players[['pts_per']].replace(0, np.nan)
    #players = players[players.Salary != 0]
    if use_last_year_salary:
        players[['last_year_salary']] = players[['last_year_salary']].replace(0, np.nan)

    #players = players.dropna()
    print(len(players))
    features = ["Age","MP","PER","TS%","TRB%","BLK%","TOV%","EFF","WS","pts_per"] + (["last_year_salary"] if use_last_year_salary else [])

    lm = linear_model.LinearRegression()
    model = lm.fit(pd.DataFrame(df_train, columns=features),
                   pd.DataFrame(df_train, columns=["Salary"]))
    param = {"objective": "reg:linear",
             "eta": 0.1,
             "min_child_weight": 6,
             "max_depth": 3,
             "subsample": 0.8
             }

    dtrain = xgb.DMatrix(pd.DataFrame(df_train, columns=features),
                         pd.DataFrame(df_train, columns=["Salary"]))

    num_round = 80
    xgb.cv(param, dtrain, num_round, nfold=5,
           metrics={'rmse'}, seed=0)
    model = xgb.train(param, dtrain, num_boost_round=50)
    preds = model.predict(xgb.DMatrix(pd.DataFrame(df_test, columns=features)))

    def make_prediction(feature_arr):
        assert len(feature_arr) == len(features)
        X = pd.DataFrame([feature_arr])
        return np.exp(lm.predict(X)[0][0])
    count = 0
    for index, row in players.iterrows():
        count += 1
        if str(row['PID']) == testData:
            print(pd.DataFrame(players, columns=features).iloc[index].values)
            return make_prediction(pd.DataFrame(players, columns=features).iloc[index].values)


def home(request):
    return render(request, 'home.html')


@csrf_exempt
def result(request):
    data = request.body.decode('utf8')
    result = predict(data.split('=')[1])
    print(result)
    return StreamingHttpResponse(str(result))
