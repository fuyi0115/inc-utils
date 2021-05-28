import React from 'react';
import './table.less';

const renderCols= (cols, key) => {
  return (
    <tr key={key}>
      {cols.map((col, idx) => {
        return <td key={idx}>{col === '' ? "''" : String(col)}</td>;
      })}
    </tr>
  );
};

const Table = ({ data = [], title }) => {
  return (
    <div className="demo-table">
      <h4 className="demo-table-title">{title}</h4>
      <table border="1">
        <thead>
          <tr>
            <th>Number</th>
            <th>Format</th>
            <th>String</th>
          </tr>
        </thead>
        <tbody>{data.map((row, idx) => renderCols(row, idx))}</tbody>
      </table>
    </div>
  );
};

export default Table;
