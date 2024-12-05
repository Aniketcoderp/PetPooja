Custom Table, Form, and Date Picker Components in React
This repository contains three modular and reusable React components: a Custom Table, a Custom Form System, and a Custom Date Picker. Each component is built to demonstrate advanced features, dynamic functionality, and adherence to React best practices.

Features
Custom Table Component
Sorting: Toggle sorting (ascending, descending, default) for each column.
Filtering:
Column-specific search filters.
Row-based filtering with custom conditions.
Dynamic Styling: Customize font size, font color, and background color for both header and body.
Responsiveness: Adapts to various screen sizes.
Bonus: Pagination for better data navigation.
Custom Form System
Dynamic Fields:
Supports TextInput, TextArea, Select, CheckboxGroup, RadioGroup, Switch, and DateInput fields.
Configuration-driven form rendering.
Validation:
Required fields, min/max length, and pattern matching.
Real-time error feedback.
Dynamic Styling: Customize form appearance via props.
State Management: Manages form state using useState and useReducer.
Custom Date Picker Component
Presets:
Options like "Today," "Yesterday," "This Month," "Last Month," and "Custom Range."
Custom Range Picker: Validate and select "From" and "To" dates.
Dynamic Styling: Customize appearance via props.
Reusable Structure: Built with modular and reusable components.
Getting Started
Prerequisites
Ensure you have the following installed on your system:

Node.js (>=14.x)
npm or yarn
Installation
Clone this repository:
bash
Copy code
git clone <repository-url>
Navigate to the project directory:
bash
Copy code
cd CUSTOM_TABLE
Install dependencies:
bash
Copy code
npm install
Running the Project
Start the development server:

bash
Copy code
npm start
The application will run at http://localhost:3000.

Project Structure
css
Copy code
src/
├── assets/
├── components/
│   ├── Date/
│   │   ├── CustomDateRange.jsx
│   │   ├── DateInput.jsx
│   │   ├── DatePicker.jsx
│   │   ├── PresentButtons.jsx
│   ├── Form_Components/
│   │   ├── FormContainer.jsx
│   │   ├── FormField.jsx
│   ├── Table_Components/
│   │   ├── Pagination.jsx
│   │   ├── TableHeader.jsx
│   │   ├── TableRow.jsx
│   ├── Date.jsx
│   ├── Form.jsx
│   ├── Landing.jsx
│   ├── Table.jsx
├── App.jsx
├── index.css
├── data.json
├── main.jsx
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






