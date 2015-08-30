var html5 = 1;

chrome.browserAction.onClicked.addListener(function(tab) {
	html5 = html5 ^ 1;
	if(html5 == 1){
		chrome.browserAction.setIcon({path:"5_16.png", tabId: tab.id});
	} else {
		chrome.browserAction.setIcon({path:"f_16.png", tabId: tab.id});
	}
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "[YouTube HTML5] from a content script:" + sender.tab.url :
                "[YouTube HTML5] from the extension");
    if (request.req == "html5")
      sendResponse(html5);
	if(html5 == 1){
		chrome.browserAction.setIcon({path:"5_16.png", tabId: sender.tab.id});
	} else {
		chrome.browserAction.setIcon({path:"f_16.png", tabId: sender.tab.id});
	}
 
});