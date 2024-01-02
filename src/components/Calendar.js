import React from 'react';
import { connect } from 'react-redux';
import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';
import { actions } from '../actions/meetingsSlice';
import {
  loadMeetingsFromApi,
  sendMeetingToApi,
} from '../providers/apiProvider';

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
    sendMeetingToApi(meetingData, this.addMeetingToState.bind(this));
  };

  addMeetingToState(meetingData) {
    this.props.saveMeeting({ meeting: meetingData });
  }

  componentDidMount() {
    loadMeetingsFromApi(this.props.loadMeetings);
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

const mapActionToProps = {
  loadMeetings: actions.loadMeetings,
  saveMeeting: actions.saveMeeting,
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);
