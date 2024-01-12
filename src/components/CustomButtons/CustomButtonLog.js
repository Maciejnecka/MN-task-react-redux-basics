import React from 'react';
import PropTypes from 'prop-types';
import { StyledCustomButtonLog } from './CustomButtonLog.styled';

const CustomButtonLog = ({ text, onClick, marginSize, ...props }) => {
  return (
    <StyledCustomButtonLog
      onClick={onClick}
      $marginSize={marginSize}
      {...props}
    >
      {text}
    </StyledCustomButtonLog>
  );
};

CustomButtonLog.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  marginSize: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.number,
  ]),
};

export default CustomButtonLog;
