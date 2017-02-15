var bkg = chrome.extension.getBackgroundPage();

function openDoor() {
  bkg.console.log('Opening the door !');

 fetch('http://192.168.1.26/open', { method: 'POST', body: '' });
}

chrome.browserAction.onClicked.addListener(openDoor);
