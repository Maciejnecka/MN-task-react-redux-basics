const formFields = [
  {
    name: 'date',
    label: 'Date',
    required: true,
    type: 'date',
    placeholder: 'YYYY-MM-DD',
  },
  {
    name: 'time',
    label: 'Time',
    required: true,
    type: 'time',
    placeholder: 'HH:MM',
  },
  {
    name: 'firstName',
    label: 'First name',
    required: true,
    minLength: 2,
    placeholder: 'First name',
  },
  {
    name: 'lastName',
    label: 'Last name',
    required: true,
    minLength: 2,
    placeholder: 'Last name',
  },
  {
    name: 'email',
    label: 'Email',
    required: true,
    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
    type: 'email',
    placeholder: 'your@email.com',
  },
];

export default formFields;
