import React from 'react';

class CalendarList extends React.Component {
  render() {
    return <ul>{this.renderMeetingsList()}</ul>;
  }

  renderMeetingsList() {
    const { meetings } = this.props;

    if (!meetings || !meetings.length) {
      return <p>No meetings available</p>;
    }

    return meetings.map((item) => this.renderMeetingsItem(item));
  }

  renderMeetingsItem(itemData) {
    return (
      <li key={itemData.id}>
        {itemData.date} {itemData.time} =&gt;
        <a href={`mailto: ${itemData.email}`}>
          {itemData.firstName} {itemData.lastName}
        </a>
      </li>
    );
  }
}

export default CalendarList;
