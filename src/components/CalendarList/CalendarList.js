import React from 'react';
import { StyledCalendarList, StyledButtonDelete } from './CalendarList.styled';
import CustomButtonDelete from '../CustomButtons';

class CalendarList extends React.Component {
  state = {
    isDeleteConfirmationVisible: false,
    deletingMeetingId: null,
  };
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
    this.setState({
      isDeleteConfirmationVisible: true,
      deletingMeetingId: meetingId,
    });
  };

  handleConfirmDelete = () => {
    const { deleteMeeting } = this.props;
    const { deletingMeetingId } = this.state;

    deleteMeeting(deletingMeetingId);

    this.setState({
      isDeleteConfirmationVisible: false,
      deletingMeetingId: null,
    });
  };

  handleCancelDelete = () => {
    this.setState({
      isDeleteConfirmationVisible: false,
      deletingMeetingId: null,
    });
  };

  renderMeetingsItem(itemData) {
    const { isDeleteConfirmationVisible, deletingMeetingId } = this.state;

    return (
      <div key={`meeting-${itemData.id}`} className="calendar__item-container">
        <li className="calendar__item" key={itemData.id}>
          <span className="calendar__date">{itemData.date}</span>{' '}
          <span className="calendar__time">{itemData.time}</span>
          <span className="calendar__arrow">=&gt;</span>
          <a
            className="calendar__email-link"
            href={`mailto: ${itemData.email}`}
          >
            {itemData.firstName} {itemData.lastName}
          </a>
          <CustomButtonDelete
            onClick={() => this.handleDeleteClick(itemData.id)}
          >
            Usuń
          </CustomButtonDelete>
        </li>
        {isDeleteConfirmationVisible && deletingMeetingId === itemData.id && (
          <div
            className="delete-confirmation"
            key={`confirmation-${itemData.id}`}
          >
            <p className="delete-paragraph">
              Are you sure you want to remove this item from the calendar?
            </p>
            <button
              className="delete-confirmation__confirm"
              onClick={this.handleConfirmDelete}
              key={`confirm-${itemData.id}`}
            >
              Confirm
            </button>
            <button
              className="delete-confirmation__cancel"
              onClick={this.handleCancelDelete}
              key={`cancel-${itemData.id}`}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default CalendarList;
