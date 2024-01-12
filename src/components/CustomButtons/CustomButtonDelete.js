import React from 'react';
import PropTypes from 'prop-types';
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

CustomButtonDelete.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default CustomButtonDelete;
