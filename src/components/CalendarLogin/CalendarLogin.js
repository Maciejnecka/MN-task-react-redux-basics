import React from 'react';
import StyledCustomInput from '../CustomInput/CustomInput.styled';
import { StyledCalendarLogin } from './CalendarLogin.styled';
import { CustomButtonLog } from '../CustomButtons';

class CalendarLogin extends React.Component {
  state = {
    login: '',
    password: '',
    errors: {},
  };

  validUserData = [
    { login: 'admin', password: 'admin' },
    { login: 'admin1', password: 'admin1' },
    { login: 'test', password: 'asdasdasd' },
  ];

  formFields = [
    { name: 'login', label: 'Login', placeholder: 'Login', required: true },
    {
      name: 'password',
      type: 'password',
      label: 'Hasło',
      placeholder: 'Hasło',
      required: true,
    },
  ];

  render() {
    const { errors } = this.state;
    return (
      <StyledCalendarLogin
        className="calendar__login"
        onSubmit={this.handleSubmit}
      >
        <div className="calendar__login-message">Log in to display list</div>
        <p className="calendar__login-data">
          Login: admin
          <br />
          Hasło: admin
        </p>
        {this.formFields.map((field) => (
          <div key={field.name} className="calendar__login-field">
            <label htmlFor={field.name}>
              {' '}
              <span className="calendar__login-label">{field.label}:</span>{' '}
            </label>
            <StyledCustomInput
              name={field.name}
              type={field.type || 'text'}
              onChange={this.handleFieldChange}
              value={this.state[field.name]}
              placeholder={field.placeholder}
              className="calendar__login-input"
            />
          </div>
        ))}
        {errors.form && (
          <div className="calendar__login-error">{errors.form}</div>
        )}
        <div className="calendar__login-actions">
          <CustomButtonLog
            text="Zaloguj się"
            onClick={this.handleSubmit}
            className="calendar__login-submit"
            marginSize="medium"
          />
        </div>
      </StyledCalendarLogin>
    );
  }

  validateForm() {
    let errors = {};

    const isValidUser = this.validUserData.some(
      (user) =>
        user.login === this.state.login && user.password === this.state.password
    );

    if (!isValidUser) {
      errors.form = 'Login or password is incorrect';
    }

    return errors;
  }

  clearFormFields = () => {
    this.setState({
      login: '',
      password: '',
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.onLoginSuccess(true);
      this.clearFormFields();
    } else {
      console.log('Errors', errors);
    }
  };

  handleFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

export default CalendarLogin;
