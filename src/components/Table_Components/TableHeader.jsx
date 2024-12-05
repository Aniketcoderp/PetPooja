import React from "react";

const TableHeader = ({ columns, sortConfig, onSort, onFilter }) => (
  <tr>
    {columns.map((col) => (
      <th key={col.key}>
        <div className="header">
          {col.title}
          {col.sortable && (
            <button
              onClick={() => onSort(col.key)}
              aria-label={`Sort by ${col.title} ${sortConfig?.key === col.key ? (sortConfig.direction === "asc" ? "ascending" : "descending") : "unsorted"}`}
            >
              {sortConfig?.key === col.key
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : "↕"}
            </button>
          )}
          {col.filterable && (
            <input
              type="text"
              placeholder={`Filter ${col.title}`}
              onChange={(e) => onFilter(col.key, e.target.value)}
              aria-label={`Filter by ${col.title}`}
            />
          )}
        </div>
      </th>
    ))}
  </tr>
);

export default TableHeader;
