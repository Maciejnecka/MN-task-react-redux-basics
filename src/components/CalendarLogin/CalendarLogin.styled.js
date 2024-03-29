import styled from 'styled-components';
import { pulseMessage } from '../../styles/animations';

export const StyledCalendarLogin = styled.form`
  background-color: #f3f3f3;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--border-radius);
  box-shadow: 8px 8px 15px var(--main-border-color), -8px -8px 15px #9cb2da,
    inset 5px 5px 10px var(--main-border-color), inset -5px -5px 10px #9cb2da;
  padding: 20px;

  .calendar__login-message {
    font-size: 16px;
    color: var(--red-font-color);
    font-weight: bold;
    margin-bottom: 1rem;
    padding: 6px;
    border-radius: var(--border-radius);
    background-color: #9cb2da;
    box-shadow: 1px 1px 3px #a0b1c3;
    animation: ${pulseMessage} 2s infinite;
  }
  .calendar__login-data {
    margin: 5px;
  }
  .calendar__login-field {
    margin-bottom: 15px;
    padding: 10px 20px;
    border-radius: var(--border-radius);
    border: 2px solid #8ba6d1;
    outline: none;
  }

  .calendar__login-input {
    width: 50%;
  }
  .calendar__login-label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #011622;
  }

  .calendar__login-error {
    color: var(--red-font-color);
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
  }

  .calendar__login-actions {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }
`;
