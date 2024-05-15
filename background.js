chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getEmails") {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: () => {
          const emailElements = document.querySelectorAll('.gD');
          const emails = Array.from(emailElements)
                              .map(element => element.getAttribute('email'))
                              .filter(email => !email.includes('@nayara'));
          const uniqueEmails = Array.from(new Set(emails));
          return uniqueEmails;
        }
      }, (results) => {
        if (results && results[0] && results[0].result) {
          sendResponse({emails: results[0].result});
        } else {
          sendResponse({emails: ['Emails not found']});
        }
      });
    });
    return true; // Indicate you will respond asynchronously
  }
});
