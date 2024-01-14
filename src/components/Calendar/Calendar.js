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
import StyledCalendarLogin from '../CalendarLogin/CalendarLogin';
import { CustomButtonLog } from '../CustomButtons';

class Calendar extends React.Component {
  state = {
    isLoading: false,
    // Temp false for true
    isLoggedIn: true,
    isLoggingIn: false,
    isLoggingOut: false,
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

  handleLogin = (loginSuccess) => {
    this.setState({ isLoggingIn: true });
    setTimeout(() => {
      this.setState({ isLoggedIn: loginSuccess, isLoggingIn: false });
    }, 500);
  };

  handleLogout = () => {
    this.setState({ isLoggingOut: true });
    setTimeout(() => {
      this.setState({ isLoggedIn: false, isLoggingOut: false });
    }, 500);
  };
  render() {
    const { meetings } = this.props;
    const { isLoading, isLoggedIn, isLoggingIn, isLoggingOut } = this.state;

    return (
      <StyledCalendar className="calendar">
        <h1 className="calendar__heading">React Redux Calendar</h1>
        <CalendarForm saveMeeting={this.sendMeetingToApi} />
        {isLoggingIn || isLoggingOut ? (
          <StyledLoading className="calendar__loading" />
        ) : !isLoggedIn ? (
          <>
            <StyledCalendarLogin onLoginSuccess={this.handleLogin} />
          </>
        ) : (
          <>
            {isLoading ? (
              <StyledLoading className="calendar__loading" />
            ) : (
              <CalendarList
                meetings={meetings}
                deleteMeeting={this.deleteMeetingFromApi}
              />
            )}

            {isLoading && (
              <StyledLoading className="calendar__loading-between" />
            )}
            <CustomButtonLog
              text="Wyloguj"
              className="calendar__logout"
              onClick={this.handleLogout}
              marginSize="large"
            />
          </>
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
