import React from 'react';
import { connect } from 'react-redux';
import CalendarList from '../CalendarList/CalendarList';
import CalendarForm from '../CalendarForm/CalendarForm';
import { actions } from '../../actions/meetingsSlice';
import {
  loadMeetingsFromApi,
  sendMeetingToApi,
  deleteMeetingFromApi,
} from '../../providers/apiProvider';

class Calendar extends React.Component {
  sendMeetingToApi = (meetingData) => {
    sendMeetingToApi(meetingData, this.addMeetingToState);
  };

  addMeetingToState = (meetingData) => {
    this.props.saveMeeting({ meeting: meetingData });
  };

  deleteMeetingFromState = (meetingId) => {
    this.props.deleteMeeting({ id: meetingId });
  };

  deleteMeetingFromApi = (meetingId) => {
    deleteMeetingFromApi(meetingId, this.deleteMeetingFromState);
  };

  componentDidMount() {
    loadMeetingsFromApi(this.props.loadMeetings);
  }

  render() {
    const { meetings } = this.props;
    return (
      <section className="calendar">
        <CalendarList
          meetings={meetings}
          deleteMeeting={this.deleteMeetingFromApi}
        />
        <CalendarForm saveMeeting={this.sendMeetingToApi} />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  meetings: state.meetings.meetings,
  deleteMeeting: actions.deleteMeeting,
});

const mapActionToProps = {
  loadMeetings: actions.loadMeetings,
  saveMeeting: actions.saveMeeting,
  deleteMeeting: actions.deleteMeeting,
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);
