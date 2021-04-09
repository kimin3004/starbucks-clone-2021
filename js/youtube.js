// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
//var player; -> 따로 쓰는 곳이 없어서 생략해도 됨
function onYouTubeIframeAPIReady() { //함수 이름 바꾸면 안됨!
  // <div id="player"></div> player앞에#붙이면 안됨!
  new YT.Player('player', {
    //height: '360',
    //width: '640',
    videoId: 'erzgOS8mctI', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay:true, // 자동 재생 유무
      loop:true, // 반복 재생 유무
      playlist:'erzgOS8mctI' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function(event){ //영상이 준비가 되면
        event.target.mute() //음소거
      }
    }
  });
}

