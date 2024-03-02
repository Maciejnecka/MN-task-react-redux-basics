function validateFormFields(formData, formFields) {
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
