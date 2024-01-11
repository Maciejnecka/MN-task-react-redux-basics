import styled from 'styled-components';
import { buttonAnimation } from '../../styles/animations';

export const StyledCalendarForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 2rem;

  .calendar__form-field {
    width: 80%;
    margin-bottom: 15px;
  }

  .calendar__form-label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  .calendar__form-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }

  .calendar__form-error {
    color: #f33f;
    text-align: center;
    margin-top: 5px;
  }

  .calendar__form-actions {
    margin-top: 15px;
  }

  .calendar__form-submit {
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 0.5s;
    background: #628395;
    cursor: pointer;
    color: #011622;
    box-shadow: 0 0 10px #628395, inset 0 0 10px #628395;
  }

  .calendar__form-submit:hover {
    animation: ${buttonAnimation} 0.5s 1 linear;
  }
`;
