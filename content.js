'use strict';

let hasConditionBeenMet = false;
let play = false;
const audio = new Audio(chrome.runtime.getURL('bahubali.mp3'));

let btn = null;

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
    console.log(btn);
    if (btn) {
      console.log("e");
      btn.addEventListener("click", function() {
        btn.classList.toggle("paused");
        toggleAudio();
      });
      console.log("t");
    }
    toggleAudio();
    chrome.runtime.sendMessage({ foundInternship: true });
  }
}

function toggleAudio() {
  console.log("here");
  console.log(audio);
  if (audio) {
    console.log(audio.paused);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Start checking for internship when the DOM is ready
  btn = document.getElementById("butn");
  // Check if the button element exists before adding an event listener
  if (btn) {
    btn.addEventListener("click", function() {
      btn.classList.toggle("paused");
      toggleAudio();
    });
  }
});

const observer = new MutationObserver(() => {
  // Use an arrow function to maintain the scope of document
  console.log(btn);
  checkForInternship(btn);
});

observer.observe(document.body, {
  subtree: true,
  childList: true,
  attributes: ['DOMContentLoaded']
});
