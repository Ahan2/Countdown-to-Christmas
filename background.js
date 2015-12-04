chrome.browserAction.onClicked.addListener(function (tab) {
if(localStorage.inputText == "op2"){
chrome.browserAction.setPopup({
    popup: 'popup.html'
});
}
});
