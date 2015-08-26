var html5 = 1;

chrome.browserAction.onClicked.addListener(function(tab) {
	html5 = html5 ^ 1;
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "[YouTube HTML5] from a content script:" + sender.tab.url :
                "[YouTube HTML5] from the extension");
    if (request.req == "html5")
      sendResponse(html5);
});