var express = require('express');
var request = require("request");
var http = require("https");
var players = require('./Players-18-19.json');
var nba = [
  {
    "team": "Boston Celtics",
    "logo": "/public/logo/BOS_logo.svg",
    "team_id": "BOS",
    "color": "#3B8349",
    "player": []
  },{
    "team": "Brooklyn Nets",
    "logo": "/public/logo/BKN_logo.svg",
    "team_id": "BKN",
    "color": "#000000",
    "player": []
  },{
    "team": "New York Knicks",
    "logo": "/public/logo/NYK_logo.svg",
    "team_id": "NYK",
    "color": "#EF6430",
    "player": []
  },{
    "team": "Philadelphia 76ers",
    "logo": "/public/logo/PHI_logo.svg",
    "team_id": "PHI",
    "color": "#186BB6",
    "player": []
  },{
    "team": "Toronto Raptors",
    "logo": "/public/logo/TOR_logo.svg",
    "team_id": "TOR",
    "color": "#661A1F",
    "player": []
  },{
    "team": "Chicago Bulls",
    "logo": "/public/logo/CHI_logo.svg",
    "team_id": "CHI",
    "color": "#CF3D41",
    "player": []
  },{
    "team": "Cleveland Cavaliers",
    "logo": "/public/logo/CLE_logo.svg",
    "team_id": "CLE",
    "color": "#6F263D",
    "player": []
  },{
    "team": "Detroit Pistonss",
    "logo": "/public/logo/DET_logo.svg",
    "team_id": "DET",
    "color": "#DE4131",
    "player": []
  },{
    "team": "Indiana Pacers",
    "logo": "/public/logo/IND_logo.svg",
    "team_id": "IND",
    "color": "#F8BB32",
    "player": []
  },{
    "team": "Milwaukee Bucks",
    "logo": "/public/logo/MIL_logo.svg",
    "team_id": "MIL",
    "color": "#305931",
    "player": []
  },{
    "team": "Atlanta Hawks",
    "logo": "/public/logo/ATL_logo.svg",
    "team_id": "ATL",
    "color": "#E0433E",
    "player": []
  },{
    "team": "Charlotte Hornets",
    "logo": "/public/logo/CHA_logo.svg",
    "team_id": "CHA",
    "color": "#276A87",
    "player": []
  },{
    "team": "Miami Heat",
    "logo": "/public/logo/MIA_logo.svg",
    "team_id": "MIA",
    "color": "#992B2E",
    "player": []
  },{
    "team": "Orlando Magic",
    "logo": "/public/logo/ORL_logo.svg",
    "team_id": "ORL",
    "color": "#2B7FC1",
    "player": []
  },{
    "team": "Washington Wizards",
    "logo": "/public/logo/WAS_logo.svg",
    "team_id": "WAS",
    "color": "#D03C2D",
    "player": []
  },{
    "team": "Denver Nuggets",
    "logo": "/public/logo/DEN_logo.svg",
    "team_id": "DEN",
    "color": "#F8BD36",
    "player": []
  },{
    "team": "Minnesota Timberwolves",
    "logo": "/public/logo/MIN_logo.svg",
    "team_id": "MIN",
    "color": "#0D2240",
    "player": []
  },{
    "team": "Oklahoma City Thunder",
    "logo": "/public/logo/OKC_logo.svg",
    "team_id": "OKC",
    "color": "#224574",
    "player": []
  },{
    "team": "Portland Trail Blazers",
    "logo": "/public/logo/POR_logo.svg",
    "team_id": "POR",
    "color": "#90271D",
    "player": []
  },{
    "team": "Utah Jazz",
    "logo": "/public/logo/UTA_logo.svg",
    "team_id": "UTA",
    "color": "#0D2240",
    "player": []
  },{
    "team": "Golden State Warriors",
    "logo": "/public/logo/GSW_logo.svg",
    "team_id": "GSW",
    "color": "#1668B3",
    "player": []
  },{
    "team": "LA Clippers",
    "logo": "/public/logo/LAC_logo.svg",
    "team_id": "LAC",
    "color": "#ED484C",
    "player": []
  },{
    "team": "Los Angeles Lakers",
    "logo": "/public/logo/LAL_logo.svg",
    "team_id": "LAL",
    "color": "#572981",
    "player": []
  },{
    "team": "Phoenix Suns",
    "logo": "/public/logo/PHX_logo.svg",
    "team_id": "PHX",
    "color": "#E6962E",
    "player": []
  },{
    "team": "Sacramento Kings",
    "logo": "/public/logo/SAC_logo.svg",
    "team_id": "SAC",
    "color": "#5B2B82",
    "player": []
  },{
    "team": "Dallas Mavericks",
    "logo": "/public/logo/DAL_logo.svg",
    "team_id": "DAL",
    "color": "#1B65A0",
    "player": []
  },{
    "team": "Houston Rockets",
    "logo": "/public/logo/HOU_logo.svg",
    "team_id": "HOU",
    "color": "#CF3D41",
    "player": []
  },{
    "team": "Memphis Grizzlies",
    "logo": "/public/logo/MEM_logo.svg",
    "team_id": "MEM",
    "color": "#6189B9",
    "player": []
  },{
    "team": "New Orleans Pelicans",
    "logo": "/public/logo/NOP_logo.svg",
    "team_id": "NOP",
    "color": "#897B58",
    "player": []
  },{
    "team": "San Antonio Spurs",
    "logo": "/public/logo/SAS_logo.svg",
    "team_id": "SAS",
    "color": "#1F1F1F",
    "player": []
  }
]

function hexToR(h) { return parseInt((cutHex(h)).substring(0,2),16) }
function hexToG(h) { return parseInt((cutHex(h)).substring(2,4),16) }
function hexToB(h) { return parseInt((cutHex(h)).substring(4,6),16) }
function cutHex(h) { return (h.charAt(0)=="#") ? h.substring(1,7) : h}
function hexToRGB(h) {
  return 'rgba('+hexToR(h)+','+hexToG(h)+','+hexToB(h)+', 0.4)';
}

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });
    app.get('/test', function(req, res){
      var options = {
        url: 'http://localhost:8000/result',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
         body: JSON.stringify({
            grant_type: 'password',
            username: 'user_name',
            password: "user_password"
         })
      };
     request(options, function (error, response, body) {
       if (!error && response.statusCode == 200) {
         console.log(body); // Print the shortened url.
         res.send(body);
       }
     });
    });
    app.get('/team/:id', function(req, res){
      var team = [];
      for(var i = 0; i < players.length; i++){
        if(players[i]['Tm']==nba[parseInt(req.params.id)]['team_id'])team.push(players[i]);
      }
      team.sort(function(a,b){
        return parseInt(b['GS']) - parseInt(a['GS']);
      });
      res.render('pages/team.ejs',{
        "team_name": nba[parseInt(req.params.id)].team,
        "team_logo":nba[parseInt(req.params.id)].logo,
        "team_color":nba[parseInt(req.params.id)].color,
        "team_color_rgba": hexToRGB(nba[parseInt(req.params.id)].color),
        "team": team
      });
    });
    app.post('/ajax_get_per', function(req, res){
      req.on('data', function(data){
        for(var i = 0; i < nba_player.length; i++){
          if(nba_player[i].PlayerName==JSON.parse(data).pname){
            console.dir(nba_player[i].PlayerId);
            var pid = nba_player[i].PlayerId;
            var fc = String(String(nba_player[i].PlayerId).split('')[0]);
            var url = "https://www.basketball-reference.com/players/"+fc+"/"+nba_player[i].PlayerId+".html";
            console.dir(url);
            request(url, (err, re, body) => {
                if (err) { return console.dir(err); }
                //var sesaonplayed=String(body).split('"advanced.').length-1;
                var game2018=String(body).split('per_game.2018')[1];
                var pts=String(game2018).split('pts_per_g" >')[1];
                var pts=String(String(pts).split('</')[0]).replace('<strong>','');
                var adv=String(body).split('advanced.2018')[1];
                var adv_pos=String(adv).split('pos" >')[1];
                var Pos=String(String(adv_pos).split('</')[0]).replace('<strong>','');
                var adv_bpm=String(adv).split('"bpm" >')[1];
                var BPM=String(String(adv_bpm).split('</')[0]).replace('<strong>','');
                var adv_per=String(adv).split('per" >')[1];
                var PER=String(String(adv_per).split('</')[0]).replace('<strong>','');
                var adv_ws=String(adv).split('"ws" >')[1];
                var WS=String(String(adv_ws).split('</')[0]).replace('<strong>','');
                var adv_blkp=String(adv).split('blk_pct" >')[1];
                var BLKp=String(String(adv_blkp).split('</')[0]).replace('<strong>','');
                var adv_dpbm=String(adv).split('dbpm" >')[1];
                var DPBM=String(String(adv_dpbm).split('</')[0]).replace('<strong>','');
                var adv_dws=String(adv).split('dws" >')[1];
                var DWS=String(String(adv_dws).split('</')[0]).replace('<strong>','');
                var adv_gp=String(adv).split('"g" >')[1];
                var GP=String(String(adv_gp).split('</')[0]).replace('<strong>','');
                var adv_stlp=String(adv).split('stl_pct" >')[1];
                var STLp=String(String(adv_stlp).split('</')[0]).replace('<strong>','');
                var adv_wsp=String(adv).split('"ws" >')[2];
                var wsp=String(String(adv_wsp).split('</')[0]).replace('<strong>','');
                wsp = parseInt(wsp)/parseInt(JSON.parse(data).played);
                var total=String(body).split('totals.2018')[1];
                var adv_trb=String(total).split('trb" >')[2];
                var TRB=String(String(adv_trb).split('</')[0]).replace('<strong>','');
                var adv_mp=String(total).split('mp" >')[2];
                var MP=String(String(adv_mp).split('</')[0]).replace('<strong>','');
                var adv_ast=String(total).split('ast" >')[2];
                var AST=String(String(adv_ast).split('</')[0]).replace('<strong>','');
                var adv_stl=String(total).split('stl" >')[2];
                var STL=String(String(adv_stl).split('</')[0]).replace('<strong>','');
                var adv_blk=String(total).split('blk" >')[2];
                var BLK=String(String(adv_blk).split('</')[0]).replace('<strong>','');
                var adv_ppts=String(total).split('pts" >')[2];
                var ppts=String(String(adv_ppts).split('</')[0]).replace('<strong>','');
                var options = {
                  url: 'http://localhost:8000/home',
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                   body: JSON.stringify({
                     "PID": pid,
                     "BPM": BPM,
                     "PER": PER,
                     "Pos": Pos,
                     "Pts": pts,
                     "WS": WS,
                     "BLKp": BLKp,
                     "DBPM": DPBM,
                     "DWS": DWS,
                     "GP": GP,
                     "STLp": STLp,
                     "MP": MP,
                     "TRB": TRB,
                     "AST": AST,
                     "STL": STL,
                     "BLK": BLK,
                     "PTS": ppts,
                     "ws": WS
                   })
                };
                console.dir(options);
                request(options, function (error, response, body) {
                  if (!error && response.statusCode == 200) {
                    console.dir(body); // Print the shortened url.
                    var percent = String(body).split(':');
                    res.json({
                      "HoF": parseInt(percent[0]),
                      "Defense": parseInt(percent[1]),
                      "First": parseInt(percent[2]),
                      "PID": pid,
                      "BPM": BPM,
                      "PER": PER,
                      "Pos": Pos,
                      "Pts": pts,
                      "WS": WS,
                      "BLKp": BLKp,
                      "DBPM": DPBM,
                      "DWS": DWS,
                      "GP": GP,
                      "STLp": STLp,
                      "MP": MP,
                      "TRB": TRB,
                      "AST": AST,
                      "STL": STL,
                      "BLK": BLK,
                      "PTS": ppts,
                      "ws": wsp
                    });
                  }
                });
              });
          }
        }
      });
    });
};
