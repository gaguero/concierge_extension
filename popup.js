function logDebug(message) {
  const debugLog = document.getElementById('debugLog');
  const logEntry = document.createElement('div');
  logEntry.textContent = message;
  debugLog.appendChild(logEntry);
}

logDebug("Popup script loaded");

chrome.runtime.sendMessage({action: "getEmails"}, (response) => {
  logDebug("Response received in popup script: " + JSON.stringify(response));
  if (response.emails) {
    const emailInfo = document.getElementById('emailInfo');
    emailInfo.innerText = `The emails come from:\n${response.emails.join('\n')}`;
  }
});
