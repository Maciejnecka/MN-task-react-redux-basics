import styled from 'styled-components';

export const StyledCalendarForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius);
  margin-bottom: 2rem;
  color: #011622;

  .calendar__form-field {
    width: 80%;
    margin-bottom: 15px;
  }

  .calendar__form-label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  .calendar__form-error {
    color: var(--red-font-color);
    font-weight: bold;
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
    border-radius: var(--border-radius);
    transition: 0.3s;
    background: #8ba6d1;
    color: var(--main-font-color);
    cursor: pointer;
    box-shadow: 8px 8px 15px var(--main-border-color), -8px -8px 15px #9cb2da,
      inset 5px 5px 10px var(--main-border-color), inset -5px -5px 10px #9cb2da;
  }

  .calendar__form-submit:hover,
  .calendar__form-submit:focus {
    background: #9cb2da;
    box-shadow: 5px 5px 10px var(--main-border-color), -5px -5px 10px #9cb2da,
      inset 2px 2px 5px var(--main-border-color), inset -2px -2px 5px #9cb2da;
  }

  .calendar__form-submit:active {
    background: var(--main-border-color);
    box-shadow: inset 5px 5px 10px var(--main-border-color),
      inset -5px -5px 10px #9cb2da;
  }
`;
