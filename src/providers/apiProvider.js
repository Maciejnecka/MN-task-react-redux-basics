const apiUrl = 'http://localhost:3005/meetings';

const loadMeetingsFromApi = (loadMeetings) => {
  fetch(apiUrl)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }

      throw new Error('Network error!');
    })
    .then((resp) => {
      loadMeetings(resp);
    })
    .catch((err) => {
      console.error(err);
    });
};

const sendMeetingToApi = (meetingData, addMeetingToState) => {
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(meetingData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error('Network error!');
    })
    .then((meetingData) => {
      addMeetingToState(meetingData);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { loadMeetingsFromApi, sendMeetingToApi };
