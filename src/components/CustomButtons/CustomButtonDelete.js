import React from 'react';
import { StyledButtonDelete } from './CustomButtonDelete.styled';

class CustomButtonDelete extends React.Component {
  render() {
    return (
      <StyledButtonDelete
        className="calendar__button-delete"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </StyledButtonDelete>
    );
  }
}

export default CustomButtonDelete;
