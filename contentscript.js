var html5 = 1; //init

//ask for html5 var saved in background.js
chrome.runtime.sendMessage({req: "html5"}, function(response) {
  html5 = response;
  console.log("[YouTube HTML5] html5 = " + response);
  if(!html5) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.textContent = 'document.createElement("video").constructor.prototype.canPlayType = function(type){return ""}';
	document.documentElement.appendChild(script);
  }
});