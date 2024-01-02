// src/components/Calendar.js
import React from 'react';
import { connect } from 'react-redux';
import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';
import { actions } from '../actions/meetingsSlice';

class Calendar extends React.Component {
  apiUrl = 'http://localhost:3005/meetings';

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

const mapStateToProps = (state) => ({
  meetings: state.meetings.meetings,
});

const mapDispatchToProps = {
  loadMeetings: actions.loadMeetings,
  saveMeeting: actions.saveMeeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
