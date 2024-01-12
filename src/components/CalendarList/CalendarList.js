import React from 'react';
import { StyledCalendarList, StyledButtonDelete } from './CalendarList.styled';

class CalendarList extends React.Component {
  render() {
    return (
      <StyledCalendarList className="calendar__list">
        {this.renderMeetingsList()}
      </StyledCalendarList>
    );
  }

  renderMeetingsList() {
    const { meetings } = this.props;

    if (!meetings || !meetings.length) {
      return <p>No meetings available</p>;
    }

    return meetings.map((item) => this.renderMeetingsItem(item));
  }

  handleDeleteClick = (meetingId) => {
    const { deleteMeeting } = this.props;
    deleteMeeting(meetingId);
  };

  renderMeetingsItem(itemData) {
    return (
      <li className="calendar__item" key={itemData.id}>
        <span className="calendar__date">{itemData.date}</span>{' '}
        <span className="calendar__time">{itemData.time}</span>
        <span className="calendar__arrow">=&gt;</span>
        <a className="calendar__email-link" href={`mailto: ${itemData.email}`}>
          {itemData.firstName} {itemData.lastName}
        </a>
        <StyledButtonDelete
          className="calendar__button-delete"
          onClick={() => this.handleDeleteClick(itemData.id)}
        >
          Usuń
        </StyledButtonDelete>
      </li>
    );
  }
}

export default CalendarList;
