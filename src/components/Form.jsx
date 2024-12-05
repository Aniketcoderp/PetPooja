import React from 'react';
import FormContainer from './Form_Components/FormContainer';

const Form = () => {
  const formConfig = [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      placeholder: 'Enter your first name',
      validation: {
        required: true,
        minLength: 2,
        maxLength: 20,
      },
      defaultValue: '',
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      placeholder: 'Enter your last name',
      validation: {
        required: true,
        minLength: 2,
        maxLength: 20,
      },
      defaultValue: '',
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      placeholder: 'Enter your email',
      validation: {
        required: true,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      },
      defaultValue: '',
    },
    {
      name: 'feedback',
      type: 'textarea',
      label: 'Feedback',
      placeholder: 'Enter your feedback',
      validation: {
        required: false,
      },
      defaultValue: '',
    },
    {
      name: 'subscribe',
      type: 'checkbox',
      label: 'Subscribe to newsletter',
      validation: {
        required: false,
      },
      defaultValue: false,
    },
    {
      name: 'dob',
      type: 'date',
      label: 'Date of Birth',
      validation: {
        required: true,
      },
      defaultValue: '',
    },
  ];

  const handleSubmit = (data) => {
    console.log('Form Data Submitted:', data);
  };

  return (
    <div style={{backgroundColor:'',padding:30}}>
      <h1 style={{textAlign:'center' }}>Custom Form</h1>
      <FormContainer formConfig={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default Form;




