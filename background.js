chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.foundInternship === true) {
    // Open the popup
    try{
      chrome.action.openPopup();
    }
    catch(err){
      console.log(err)
    }
    console.log("here")
   
    
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        files: ['popup.js']
      });
      const extensionId = chrome.runtime.id;
     chrome.runtime.sendMessage(extensionId, { action: 'playAudio' });
    }, 1000);
    console.log("here1")
    // Send a message to the popup script using the extension ID
    
    // 
    //   // Send a message to the popup script
    //   chrome.runtime.sendMessage(extensionId, { action: 'playAudio' });

    //   // Inject the popup script into the current tab
    //   chrome.scripting.executeScript({
    //     target: { tabId: sender.tab.id, allFrames: true },
    //     
    //   });
    // 
  }
  
});
