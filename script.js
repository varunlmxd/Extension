'use strict';

document.addEventListener('DOMContentLoaded', function() {
  let play = false
  var myAudio = new Audio(chrome.runtime.getURL("bahubali.mp3"));
  function main(){
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
  }

  main();
});