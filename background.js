chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.foundInternship === true) {
    chrome.action.openPopup();
  }
  // if(message.type === 'play'){
  //   audio.play();
  // }
  // if(message.type ==='pause'){
  //   audio.pause();
  // }
  
});

