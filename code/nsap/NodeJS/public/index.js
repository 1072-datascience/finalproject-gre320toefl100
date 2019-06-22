var nba = [
  {
    "team": "Boston Celtics",
    "logo": "BOS_logo.svg",
    "team_id": "1610612738",
    "player": []
  },{
    "team": "Brooklyn Nets",
    "logo": "BKN_logo.svg",
    "team_id": "1610612751",
    "player": []
  },{
    "team": "New York Knicks",
    "logo": "NYK_logo.svg",
    "team_id": "1610612752",
    "player": []
  },{
    "team": "Philadelphia 76ers",
    "logo": "PHI_logo.svg",
    "team_id": "1610612755",
    "player": []
  },{
    "team": "Toronto Raptors",
    "logo": "TOR_logo.svg",
    "team_id": "1610612761",
    "player": []
  },{
    "team": "Chicago Bulls",
    "logo": "CHI_logo.svg",
    "team_id": "1610612741",
    "player": []
  },{
    "team": "Cleveland Cavaliers",
    "logo": "CLE_logo.svg",
    "team_id": "1610612739",
    "player": []
  },{
    "team": "Detroit Pistonss",
    "logo": "DET_logo.svg",
    "team_id": "1610612765",
    "player": []
  },{
    "team": "Indiana Pacers",
    "logo": "IND_logo.svg",
    "team_id": "1610612754",
    "player": []
  },{
    "team": "Milwaukee Bucks",
    "logo": "MIL_logo.svg",
    "team_id": "1610612749",
    "player": []
  },{
    "team": "Atlanta Hawks",
    "logo": "ATL_logo.svg",
    "team_id": "1610612737",
    "player": []
  },{
    "team": "Charlotte Hornets",
    "logo": "CHA_logo.svg",
    "team_id": "1610612766",
    "player": []
  },{
    "team": "Miami Heat",
    "logo": "MIA_logo.svg",
    "team_id": "1610612748",
    "player": []
  },{
    "team": "Orlando Magic",
    "logo": "ORL_logo.svg",
    "team_id": "1610612753",
    "player": []
  },{
    "team": "Washington Wizards",
    "logo": "WAS_logo.svg",
    "team_id": "1610612764",
    "player": []
  },{
    "team": "Denver Nuggets",
    "logo": "DEN_logo.svg",
    "team_id": "1610612743",
    "player": []
  },{
    "team": "Minnesota Timberwolves",
    "logo": "MIN_logo.svg",
    "team_id": "1610612750",
    "player": []
  },{
    "team": "Oklahoma City Thunder",
    "logo": "OKC_logo.svg",
    "team_id": "1610612760",
    "player": []
  },{
    "team": "Portland Trail Blazers",
    "logo": "POR_logo.svg",
    "team_id": "1610612757",
    "player": []
  },{
    "team": "Utah Jazz",
    "logo": "UTA_logo.svg",
    "team_id": "1610612762",
    "player": []
  },{
    "team": "Golden State Warriors",
    "logo": "GSW_logo.svg",
    "team_id": "1610612744",
    "player": []
  },{
    "team": "LA Clippers",
    "logo": "LAC_logo.svg",
    "team_id": "1610612746",
    "player": []
  },{
    "team": "Los Angeles Lakers",
    "logo": "LAL_logo.svg",
    "team_id": "1610612747",
    "player": []
  },{
    "team": "Phoenix Suns",
    "logo": "PHX_logo.svg",
    "team_id": "1610612756",
    "player": []
  },{
    "team": "Sacramento Kings",
    "logo": "SAC_logo.svg",
    "team_id": "1610612758",
    "player": []
  },{
    "team": "Dallas Mavericks",
    "logo": "DAL_logo.svg",
    "team_id": "1610612742",
    "player": []
  },{
    "team": "Houston Rockets",
    "logo": "HOU_logo.svg",
    "team_id": "1610612745",
    "player": []
  },{
    "team": "Memphis Grizzlies",
    "logo": "MEM_logo.svg",
    "team_id": "1610612763",
    "player": []
  },{
    "team": "New Orleans Pelicans",
    "logo": "NOP_logo.svg",
    "team_id": "1610612740",
    "player": []
  },{
    "team": "San Antonio Spurs",
    "logo": "SAS_logo.svg",
    "team_id": "1610612759",
    "player": []
  }
]
$(document).ready(function(){
  $('.team_title').text(nba[0].team);
  $('.team_logo').attr('src','/public/logo/'+nba[0].logo);
  $('body').on('click','.menu-control',function(){
    var now=parseInt($(this).attr('next-id'));
    $('.team_title').text(nba[now].team);
    $('.team_logo').attr('src','/public/logo/'+nba[now].logo);
    $('.team_logo').attr('tid',now);
    var prev=now-1;
    var next=now+1;
    if(next>29)next=0;
    if(prev<0)prev=29;
    $('.menu-control.glyphicon-menu-left').attr('next-id',prev);
    $('.menu-control.glyphicon-menu-right').attr('next-id',next);
  });
  document.body.addEventListener('keydown', function(e){
    if(e.which==39){
      var now=parseInt($('.menu-control.glyphicon-menu-right').attr('next-id'));
      $('.team_title').text(nba[now].team);
      $('.team_logo').attr('src','/public/logo/'+nba[now].logo);
      $('.team_logo').attr('tid',now);
      var prev=now-1;
      var next=now+1;
      if(next>29)next=0;
      if(prev<0)prev=29;
      $('.menu-control.glyphicon-menu-left').attr('next-id',prev);
      $('.menu-control.glyphicon-menu-right').attr('next-id',next);
    }else if(e.which==37){
      var now=parseInt($('.menu-control.glyphicon-menu-left').attr('next-id'));
      $('.team_title').text(nba[now].team);
      $('.team_logo').attr('src','/public/logo/'+nba[now].logo);
      $('.team_logo').attr('tid',now);
      var prev=now-1;
      var next=now+1;
      if(next>29)next=0;
      if(prev<0)prev=29;
      $('.menu-control.glyphicon-menu-left').attr('next-id',prev);
      $('.menu-control.glyphicon-menu-right').attr('next-id',next);
    }
  });
});
