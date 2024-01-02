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
  sendMeetingToApi = (meetingData) => {
    sendMeetingToApi(meetingData, this.addMeetingToState);
  };

  addMeetingToState = (meetingData) => {
    this.props.saveMeeting({ meeting: meetingData });
  };

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
