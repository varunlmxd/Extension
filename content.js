'use strict';

let hasSongBeenPlayed = false;
function checkForAccepted() {

	if (hasSongBeenPlayed) {
		return;
	}
	const elements = document.querySelectorAll('span[data-e2e-locator="submission-result"]');
	let foundAccepted = false;
	for (const element of elements) {
		if (element.textContent.includes("Accepted")) {   foundAccepted = true;   
			break;  
		} 
	} 
	if (foundAccepted && chrome.runtime && chrome.runtime.sendMessage && !hasSongBeenPlayed) {  hasSongBeenPlayed = true;
		const extensionId = chrome.runtime.id;

		// Send a message to the popup script to play the audio tag
		chrome.runtime.sendMessage(extensionId, {
			type: "play-audio"
		});  chrome.runtime.sendMessage({
			foundAccepted: true
		}); 
	}
}

// You can call this function when you want to play the audio

checkForAccepted();
const observer = new MutationObserver(() =>{
  checkForAccepted();
});

observer.observe(document.body, { subtree: true,
	 childList: true
});