import React from 'react';
import validateFormFields from '../utilities/formValidator';
import { StyledCalendarForm } from './CalendarForm.styled';

class CalendarForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    time: '',
    errors: {},
  };

  formFields = [
    { name: 'date', type: 'date', label: 'Data', placeholder: 'RRRR-MM-DD' },
    {
      name: 'time',
      type: 'time',
      label: 'Godzina',
      placeholder: 'HH:MM',
    },
    { name: 'firstName', label: 'Imię' },
    { name: 'lastName', label: 'Nazwisko' },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'nazwa@poczty.pl',
    },
  ];

  render() {
    return (
      <StyledCalendarForm
        className="calendar__form"
        action=""
        onSubmit={this.handleSubmit}
      >
        {this.formFields.map((field) => (
          <div key={field.name} className="calendar__form-field">
            <label htmlFor={field.name} className="calendar__form-label">
              {field.label}:{' '}
              <input
                name={field.name}
                type={field.type || 'text'}
                onChange={this.handleFieldChange}
                value={this.state[field.name]}
                placeholder={field.placeholder}
                className="calendar__form-input"
              />
            </label>
            {this.state.errors[field.name] && (
              <div className="calendar__form-error">
                {this.state.errors[field.name]}
              </div>
            )}
          </div>
        ))}
        <div className="calendar__form-actions">
          <input
            type="submit"
            value="Zapisz"
            className="calendar__form-submit"
          />
        </div>
      </StyledCalendarForm>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({
      errors,
    });

    if (Object.keys(errors).length === 0) {
      this.saveMeeting();
      this.clearFormFields();
    }
  };

  validateForm() {
    const formData = {};
    this.formFields.forEach((field) => {
      formData[field.name] = this.state[field.name];
    });

    return validateFormFields(formData);
  }

  handleFieldChange = (e) => {
    const fieldName = e.target.name;

    if (this.isFieldNameCorrect(fieldName)) {
      const value = e.target.value;
      const errors = { ...this.state.errors };

      const fieldErrors = validateFormFields({ [fieldName]: value });

      errors[fieldName] = fieldErrors[fieldName] || null;

      this.setState({
        [fieldName]: value,
        errors,
      });
    }
  };

  saveMeeting() {
    const { saveMeeting } = this.props;

    if (typeof saveMeeting === 'function') {
      saveMeeting(this.getFieldsData());
    }
  }

  clearFormFields() {
    const fieldsData = this.getFieldsData();
    for (const prop in fieldsData) {
      fieldsData[prop] = '';
    }

    this.setState({
      ...fieldsData,
      errors: {},
    });
  }

  getFieldsData() {
    const fieldsData = {};
    this.formFields.forEach((field) => {
      fieldsData[field.name] = this.state[field.name];
    });

    return fieldsData;
  }

  isFieldNameCorrect(name) {
    return this.formFields.some((field) => field.name === name);
  }

  renderErrors() {
    return Object.values(this.state.errors).map(
      (err, index) => err && <li key={index}>{err}</li>
    );
  }
}

export default CalendarForm;
