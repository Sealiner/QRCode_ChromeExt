var pageData = {};

function refreshPopup (callback) {
     callback(pageData);
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
     pageData.url = tab.url;
     console.log(pageData);
     chrome.pageAction.show(tabId);
});


chrome.tabs.onSelectionChanged.addListener(function (tabId, selectInfo) {
     chrome.tabs.get(tabId, function (tab) {
          pageData.url = tab.url;
          console.log(pageData);
     });
})
