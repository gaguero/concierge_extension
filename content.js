<<<<<<< HEAD
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'GET_EMAIL') {
      const emailElement = document.querySelector('.gD'); // Adjust selector as necessary
      const email = emailElement ? emailElement.getAttribute('email') : null;
      if (email) {
        chrome.runtime.sendMessage({type: 'EMAIL_FETCHED', email: email, token: message.token});
      }
    }
  });
=======
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'GET_EMAIL') {
      const emailElement = document.querySelector('.gD'); // Adjust selector as necessary
      const email = emailElement ? emailElement.getAttribute('email') : null;
      if (email) {
        chrome.runtime.sendMessage({type: 'EMAIL_FETCHED', email: email, token: message.token});
      }
    }
  });
>>>>>>> 84c20e1 (Add initial extension files)
  