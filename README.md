<h1>Custom Table, Form, and Date Picker Components in React</h1>
# React Modular Components: Table, Form, and Date Picker

This project demonstrates the implementation of three modular components in React: **Custom Table**, **Custom Form System**, and **Custom Date Picker**. These components are reusable, interactive, and designed to simplify user interface functionality.

---

## Features

### 1. Custom Table
- **Sorting**: Click on column headers to sort the data.
- **Filtering**: Search through table data with a text input field.
- **Dynamic Rendering**: Displays data based on a configuration object.

### 2. Custom Form System
- **Dynamic Form Fields**: Supports different field types (text, number, select, checkbox, etc.).
- **Validation**: Built-in validation for required fields, email formats, and more.
- **Submit Handling**: Captures and processes form data on submission.

### 3. Custom Date Picker
- **Date Selection**: Interactive calendar for selecting dates.
- **Date Validation**: Validates selected dates (e.g., disables past or future dates based on configuration).
- **Custom Styling**: The date picker can be styled to match the application theme.

---

## Folder Structure

```plaintext
src/
├── components/
│   ├── Table.jsx         # Custom Table Component
│   ├── Form.jsx          # Custom Form System Component
│   ├── DatePicker.jsx    # Custom Date Picker Component
├── App.jsx               # Main Application File
├── index.js              # Entry Point
└── styles/
    ├── Table.css         # Styles for Table Component
    ├── Form.css          # Styles for Form Component
    ├── DatePicker.css    # Styles for Date Picker Component
```
Usage
Custom Table
Import the Table component in your file.
Pass data and configuration as props:
jsx
Copy code
<Table data={tableData} config={tableConfig} />
Custom Form System
Import the Form component.
Pass a configuration object to dynamically render fields:
jsx
Copy code
<Form config={formConfig} onSubmit={handleSubmit} />
Custom Date Picker
Import the DatePicker component.
Customize it with props for appearance and functionality:
jsx
Copy code
<DatePicker onDateChange={handleDateChange} />
Technologies Used
React.js
CSS for styling
JavaScript (ES6+)
Contribution
Feel free to fork this repository and submit pull requests for improvements.

License
This project is licensed under the MIT License.

Author
Aniket
Part of Masai School, FT34 Batch

Let me know if you'd like further customization!






