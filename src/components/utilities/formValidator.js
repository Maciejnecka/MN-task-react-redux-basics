const formFields = [
  {
    name: 'date',
    label: 'Date',
    required: true,
  },
  {
    name: 'time',
    label: 'Time',
    required: true,
  },
  {
    name: 'firstName',
    label: 'First name',
    required: true,
    minLength: 2,
  },
  {
    name: 'lastName',
    label: 'Last name',
    required: true,
    minLength: 2,
  },
  {
    name: 'email',
    label: 'email',
    required: true,
    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
  },
];

function validateFormFields(formData) {
  const errors = {};

  formFields.forEach((field) => {
    if (field.required && !formData[field.name]) {
      errors[field.name] = `${field.label} is required`;
    }

    if (field.minLength && formData[field.name]?.length < field.minLength) {
      errors[
        field.name
      ] = `${field.label} should be at least ${field.minLength} characters long`;
    }

    if (field.pattern && !field.pattern.test(formData[field.name])) {
      errors[field.name] = `Invalid ${field.label}`;
    }
  });

  return errors;
}

export default validateFormFields;
