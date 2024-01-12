import React from 'react';
import StyledCustomInput from '../CustomInput/CustomInput.styled';
import { StyledCalendarLogin } from './CalendarLogin.styled';

class CalendarLogin extends React.Component {
  state = {
    login: '',
    password: '',
    errors: {},
  };

  validLogins = ['admin'];
  validPasswords = ['admin'];

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
          <input
            type="submit"
            value="Zaloguj się"
            className="calendar__login-submit"
          />
        </div>
      </StyledCalendarLogin>
    );
  }

  validateForm() {
    let errors = {};

    const isLoginValid = this.validLogins.includes(this.state.login);
    const isPasswordValid = this.validPasswords.includes(this.state.password);

    if (!isLoginValid || !isPasswordValid) {
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
