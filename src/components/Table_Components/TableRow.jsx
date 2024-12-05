import React from "react";

const TableRow = ({ row, columns }) => (
  <tr>
    {columns.map((col) => (
      <td key={col.key}>{row[col.key]}</td>
    ))}
  </tr>
);

export default TableRow;
