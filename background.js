chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.foundAccepted === true) {
    // Open the popup
    try{
      chrome.action.openPopup();
    }
    catch(err){
      console.log(err)
    }
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        files: ['popup.js']
      });
      const extensionId = chrome.runtime.id;
     chrome.runtime.sendMessage(extensionId, { action: 'playAudio' });
    }, 1000); 
  }
  
});
