import React, { useState } from 'react';
import FormField from './FormField';

const FormContainer = ({ formConfig, onSubmit }) => {
  const [formState, setFormState] = useState(() => {
    const savedFormData = localStorage.getItem('formData');
    return savedFormData ? JSON.parse(savedFormData) : formConfig.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || '';
      return acc;
    }, {});
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value, rules) => {
    if (rules?.required && !value) {
      return 'This field is required';
    }
    if (rules?.minLength && value.length < rules.minLength) {
      return `Minimum length is ${rules.minLength}`;
    }
    if (rules?.maxLength && value.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength}`;
    }
    if (rules?.pattern && !rules.pattern.test(value)) {
      return 'Invalid format';
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormState((prev) => ({ ...prev, [name]: newValue }));
    const fieldConfig = formConfig.find((field) => field.name === name);
    const error = validateField(name, newValue, fieldConfig.validation);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    formConfig.forEach((field) => {
      const error = validateField(field.name, formState[field.name], field.validation);
      if (error) {
        validationErrors[field.name] = error;
      }
    });
    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem('formData', JSON.stringify(formState));
      onSubmit(formState);
      alert("Form data saved to localStorage!");
    } else {
      setErrors(validationErrors);
    }
  };

  const handleReset = () => {
    setFormState(() =>
      formConfig.reduce((acc, field) => {
        acc[field.name] = field.defaultValue || '';
        return acc;
      }, {})
    );
    setErrors({});
    localStorage.removeItem('formData'); 
  };

  return (
    <form onSubmit={handleSubmit} style={{backgroundColor:'',paddingRight:30}}>
      {formConfig.map((fieldConfig, index) => (
        <FormField
          key={index}
          fieldConfig={fieldConfig}
          value={formState[fieldConfig.name]}
          onChange={handleChange}
          error={errors[fieldConfig.name]}
        />
      ))}
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default FormContainer;

