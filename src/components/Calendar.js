// src/components/Calendar.js
import React from 'react';
import { connect } from 'react-redux';

import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';
import { actions } from '../meetings/meetingsSlice';

class Calendar extends React.Component {
  apiUrl = 'http://localhost:3005/meetings';

  state = {
    meetings: [],
  };

  loadMeetingsFromApi() {
    fetch(this.apiUrl)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }

        throw new Error('Network error!');
      })
      .then((resp) => {
        this.props.loadMeetings(resp);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  sendMeetingToApi = (meetingData) => {
    fetch(this.apiUrl, {
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
        this.addMeetingToState(meetingData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addMeetingToState(meetingData) {
    this.props.saveMeeting({ meeting: meetingData });
  }

  componentDidMount() {
    this.loadMeetingsFromApi();
  }

  render() {
    const { meetings } = this.props;
    return (
      <section>
        <CalendarList meetings={meetings} />
        <CalendarForm saveMeeting={this.sendMeetingToApi} />
      </section>
    );
  }
}

const mapActionToProps = {
  loadMeetings: actions.loadMeetings,
  saveMeeting: actions.saveMeeting,
};

const mapStateToProps = (state, props) => ({
  meetings: state.meetings.meetings,
});

export default connect(mapStateToProps, mapActionToProps)(Calendar);
