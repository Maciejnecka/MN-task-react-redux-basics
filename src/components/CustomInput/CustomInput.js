import React from 'react';
import StyledCustomInput from './CustomInput.styled';

function CustomInput({ type, placeholder, value, name, onChange, disabled }) {
  return (
    <StyledCustomInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      name={name}
    />
  );
}

export default CustomInput;
