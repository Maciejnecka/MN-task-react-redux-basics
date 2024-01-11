import React from 'react';

class CalendarList extends React.Component {
  render() {
    return <ul className="calendar__list">{this.renderMeetingsList()}</ul>;
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
        {itemData.date} {itemData.time} =&gt;
        <a href={`mailto: ${itemData.email}`}>
          {itemData.firstName} {itemData.lastName}
        </a>
        <button onClick={() => this.handleDeleteClick(itemData.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default CalendarList;
