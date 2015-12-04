var element = document.getElementById("cardtype");

element.value = localStorage.inputText || 'op2';
if(element.value == "op2"){
  chrome.browserAction.setPopup({
      popup: 'popup.html'
  });
}

element.addEventListener("change", function(e) {
    var selectedValue = this.value;
    localStorage.inputText = selectedValue;
    chrome.browserAction.setPopup({
        popup: selectedValue == 'op2' ? 'popup.html' : 'popup2.html'
    });
});
