import React from 'react';
import validateFormFields from './utilities/formValidator';

class CalendarForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    time: '',
    errors: [],
  };

  formFields = [
    { name: 'date', label: 'Data', placeholder: 'RRRR-MM-DD' },
    { name: 'time', label: 'Godzina', placeholder: 'HH:MM' },
    { name: 'firstName', label: 'Imię' },
    { name: 'lastName', label: 'Nazwisko' },
    { name: 'email', label: 'Email', placeholder: 'nazwa@poczty.pl' },
  ];

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <ul>{this.renderErrors()}</ul>
        {this.formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>
              {field.label}:{' '}
              <input
                name={field.name}
                onChange={this.handleFieldChange}
                value={this.state[field.name]}
                placeholder={field.placeholder}
              />
            </label>
          </div>
        ))}
        <div>
          <input type="submit" value="zapisz" />
        </div>
      </form>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({
      errors,
    });

    if (errors.length === 0) {
      this.saveMeeting();
      this.clearFormFields();
    }
  };

  validateForm() {
    const formData = {};
    this.formFields.forEach((field) => {
      formData[field.name] = this.state[field.name];
    });

    const errors = validateFormFields(formData);

    this.setState({
      errors,
    });

    return Object.values(errors);
  }

  handleFieldChange = (e) => {
    const fieldName = e.target.name;

    if (this.isFieldNameCorrect(fieldName)) {
      this.setState({
        [fieldName]: e.target.value,
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

    this.setState(fieldsData);
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
    return this.state.errors.map((err, index) => <li key={index}>{err}</li>);
  }
}

export default CalendarForm;
