import React from "react";

interface TableProps<T> {
  headers: string[];
  data: T[];
  onRowClick: (row: T) => void;
  renderRow: (row: T) => React.ReactNode;
}

const TableComponent = <T,>({
  headers,
  data,
  onRowClick,
  renderRow,
}: TableProps<T>) => {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs uppercase">
        <tr >
          {headers.map((header, idx) => (
            <th key={idx} scope="col" className="py-3 px-4 text-left text-sm font-medium text-gray-500">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            onClick={() => onRowClick(item)}
            className="bg-white border-b hover:bg-gray-50 cursor-pointer"
          >
            {renderRow(item)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
