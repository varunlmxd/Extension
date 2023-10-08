'use strict';
const playPauseButton = document.getElementById("butn");
const audio = document.getElementById("audio");
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'playAudio') {
    if (audio) {
      audio.play();
    }
  }
});


if (playPauseButton) {
  playPauseButton.addEventListener("click", () => {
    playPauseButton.classList.toggle("paused");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
}


