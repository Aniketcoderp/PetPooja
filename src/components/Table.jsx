import React, { useState, useEffect, useMemo, memo } from "react";
import TableHeader from "./Table_Components/TableHeader";
import TableRow from "./Table_Components/TableRow";
import Pagination from "./Table_Components/Pagination";

const Table = memo(({ data, columns, rowsPerPage = 10 }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  useEffect(() => {
    setFilteredData(data);
    setCurrentPage(1);
  }, [data]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleFilter = (key, value) => {
    const filtered = data.filter((item) =>
      item[key].toString().toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
  };

  const sortedFilteredData = useMemo(() => {
    if (!sortConfig) return filteredData;
    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return sortedFilteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedFilteredData, currentPage, rowsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <TableHeader
            columns={columns}
            sortConfig={sortConfig}
            onSort={handleSort}
            onFilter={handleFilter}
          />
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <TableRow key={index} row={row} columns={columns} />
          ))}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
});

export default Table;
