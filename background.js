chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.foundInternship === true) {
    chrome.action.openPopup();
  }
  
});