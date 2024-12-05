import React from 'react';

const FormField = ({ fieldConfig, value, onChange, error }) => {
  const { name, label, type, placeholder, options, validation } = fieldConfig;

  const renderField = () => {
    switch (type) {
      case 'text':
      case 'email':
      case 'date':
        return (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-label={label}
          />
        );
      case 'textarea':
        return (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-label={label}
          />
        );
      case 'checkbox':
        return (
          <input
            type="checkbox"
            name={name}
            checked={value}
            onChange={onChange}
            aria-label={label}
          />
        );
      case 'select':
        return (
          <select name={name} value={value} onChange={onChange} aria-label={label}>
            {options.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {renderField()}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FormField;
