'use strict';

let hasConditionBeenMet = false;
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
    const extensionId = chrome.runtime.id;

  // Send a message to the popup script to play the audio tag
  chrome.runtime.sendMessage(extensionId, {
    type: "play-audio"
  });
    chrome.runtime.sendMessage({ foundInternship: true });
  }
}


// You can call this function when you want to play the audio


checkForInternship();
const observer = new MutationObserver(() => {
  checkForInternship();
});

observer.observe(document.body, {
  subtree: true,
  childList: true
});



