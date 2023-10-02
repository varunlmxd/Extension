'use strict';

document.addEventListener('DOMContentLoaded', function() {
  let play = false
  var myAudio = new Audio(chrome.runtime.getURL("bahubali.mp3"));
  function main(){
    document.getElementById('found').innerHTML = "One"
      document.getElementById('found').innerHTML = "TWo"
      
      document.getElementById('found').innerHTML = "Thre"
      
      document.getElementById('found').innerHTML = "4"
  
  document.getElementById('found').innerHTML = "five"
  myAudio.play();
  const y = document.getElementById('pop');
  y.addEventListener('click', () => {
    if (play) {
      play = false;
      myAudio.play();
      y.innerHTML = "Pause";
    } else {
      play = true;
      myAudio.pause();
      y.innerHTML = "Play";
    }
  });
  document.getElementById('found').innerHTML = "6"
  }

  main();
});