# NBA 薪資預測

### Groups
* 王瀚 104703002
* 徐躍華 104703004
* 徐子崴 104703006
* 林資超 104703042

### Goal
收集各年度NBA球員各項數據，藉此預測球員未來薪資。

### Demo 
You should provide an example commend to reproduce your result
```Python
jupyter notebook code/data_preprocess.ipynb
jupyter notebook code/visualization.ipynb
jupyter notebook code/modeling.ipynb
```
* any on-line visualization

### System Demo
```Shell
cd code/nsap/NodeJS
npm init
npm start
```
* Then the system will run on your machine

## Folder organization and its related information

### docs
* Your presentation, 1072_datascience_FP_<yourID|groupName>.ppt/pptx/pdf, by **Jun. 25**
* Any related document for the final project
  * papers
  * software user guide

### data

* Source: 根據[www.basketball-reference.com](www.basketball-reference.com)的球員資料，爬下並前處理資料
* Input format: .csv
* Any preprocessing?
  * 先依照各年度，scrape球員基本資料、球員薪資資料、球員進階資料
  * 合併此三大資料
  * 設定球員ID並簡化position
  * 薪資資料缺值補0

### code

* Which method do you use?
  * LinearRegression
* What is a null model for comparison?
  * RandomForestRegressor
* How do your perform evaluation? ie. Cross-validation, or extra separated data
  * Use test data (train : test = 3 : 1)

### results

* Which metric do you use 
  * RMSE
* Is your improvement significant?
  * Not bad
* What is the challenge part of your project?
  * In NBA, NBA organizations need to follow Collective Bargaining Agreement to sign or trade players. Collective Bargaining Agreement specified many signature rules liked salary cap, rookie exception, Larry Bird exception, and so on. Accrodingly, can not only deal with staticsis.

## Reference
* Code/implementation which you include/reference (__You should indicate in your presentation if you use code for others. Otherwise, cheating will result in 0 score for final project.__)
  * [urllib.request](https://docs.python.org/3/library/urllib.request.html)
  * [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
  * [pandas](https://pandas.pydata.org/pandas-docs/stable/)
  * [numpy](https://docs.scipy.org/doc/numpy/reference/)
  * [matplotlib](https://matplotlib.org/3.1.0/contents.html)
  * [seaborn](https://seaborn.pydata.org/)
  * [scikit-learn](https://scikit-learn.org/stable/documentation.html)
  * [xgboost](https://xgboost.readthedocs.io/en/latest/)
* Packages you use
  * Python:
    * sys
    * csv
    * urllib.request
    * beautifulsoup4
    * math
    * pandas
    * numpy
    * matplotlib
    * seaborn
    * sklearn
    * xgboost
  * Node.js:

* Related publications


