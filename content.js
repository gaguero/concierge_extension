console.log("Content script loaded");

function getEmailSenders() {
  const emailElements = document.querySelectorAll('.gD');
  const emails = Array.from(emailElements)
                      .map(element => element.getAttribute('email'))
                      .filter(email => !email.includes('@nayara'));
  const uniqueEmails = Array.from(new Set(emails));
  return uniqueEmails;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getEmails') {
    const emails = getEmailSenders();
    console.log("Emails found:", emails);
    sendResponse({emails: emails});
  }
});
