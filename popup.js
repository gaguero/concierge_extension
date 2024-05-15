chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'EMAIL_FETCHED') {
      const email = message.email;
      fetch(`https://api.appsheet.com/api/v2/applications/aedf865d-9449-4c7f-94d6-f67145fe9ff1/tables/huespedes/records`, {
        method: 'GET',
        headers: {
          'ApplicationAccessKey': 'V2-x5CWb-XulHw-EKjAu-Iq40q-7YwVO-GQLC2-KOpUT-Qectb'
        }
      })
      .then(response => response.json())
      .then(data => {
        const profile = data.find(record => record.Email === email);
        if (profile) {
          document.getElementById('profile-info').innerText = JSON.stringify(profile, null, 2);
        } else {
          document.getElementById('profile-info').innerText = 'Profile not found';
        }
      })
      .catch(error => console.error('Error fetching profile:', error));
    }
  });
  