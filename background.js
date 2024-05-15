<<<<<<< HEAD
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.identity.getAuthToken({interactive: true}, (token) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }
      chrome.tabs.sendMessage(tab.id, {type: 'GET_EMAIL', token: token});
    });
  });
=======
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.identity.getAuthToken({interactive: true}, (token) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }
      chrome.tabs.sendMessage(tab.id, {type: 'GET_EMAIL', token: token});
    });
  });
>>>>>>> 84c20e1 (Add initial extension files)
  