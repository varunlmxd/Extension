'use strict';
let hasConditionBeenMet = false;
let play = true;
let audio = null; // Declare audio element globally
document.addEventListener('DOMContentLoaded',playAudio);
function checkForInternship() {
  if (hasConditionBeenMet) {
    return;
  }
  const elements = document.querySelectorAll('span[data-e2e-locator="submission-result"]');
  let foundInternship = false;

  for (const element of elements) {
    if (element.textContent.includes("Accepted")) {
      foundInternship = true;
      break;
    }
  }
  if (foundInternship && chrome.runtime && chrome.runtime.sendMessage && !hasConditionBeenMet) {
    hasConditionBeenMet = true;
    playAudio();
    chrome.runtime.sendMessage({ foundInternship: true });
  }
}

function playAudio() {
  // Create an audio element and set the audio source
  audio = new Audio(chrome.runtime.getURL('bahubali.mp3'));
  if(hasConditionBeenMet)
  audio.play();
  // Attach click event listener to a button with ID 'btn'
  const btn = document.getElementById('btn');
  console.log(btn)
  if (btn) {
    btn.addEventListener('click', toggleAudio);
  }
}
function toggleAudio() {
  if (audio) {
    if (play) {
      audio.pause();
    } else {
      audio.play();
    }
    play = !play;
  }
}

checkForInternship();

const observer = new MutationObserver(checkForInternship);
observer.observe(document.body, { subtree: true, childList: true });
