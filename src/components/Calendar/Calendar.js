import React from 'react';
import { connect } from 'react-redux';
import CalendarList from '../CalendarList';
import CalendarForm from '../CalendarForm';
import { actions } from '../../actions/meetingsSlice';
import {
  loadMeetingsFromApi,
  sendMeetingToApi,
  deleteMeetingFromApi,
} from '../../providers/apiProvider';

import { StyledCalendar, StyledLoading } from './Calendar.styled';

class Calendar extends React.Component {
  state = {
    isLoading: false,
  };

  sendMeetingToApi = (meetingData) => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      sendMeetingToApi(meetingData, (meetingData) => {
        this.props.saveMeeting({ meeting: meetingData });
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 500);
      });
    }, 500);
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
    const { isLoading } = this.state;
    return (
      <StyledCalendar className="calendar">
        <CalendarForm saveMeeting={this.sendMeetingToApi} />
        {isLoading ? (
          <StyledLoading className="calendar__loading" />
        ) : (
          <CalendarList
            meetings={meetings}
            deleteMeeting={this.deleteMeetingFromApi}
          />
        )}
      </StyledCalendar>
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
