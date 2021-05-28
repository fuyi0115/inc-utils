import React from 'react';
import { mockNFormat } from '../__tests__/mock';
import Table from './table';

export default () => {
  return (
    <div>
      <Table data={mockNFormat.numbers} title="Numbers" />
      <Table data={mockNFormat.bytes} title="Bytes" />
      <Table data={mockNFormat.time} title="Time" />
      <Table data={mockNFormat.currency} title="Currency" />
      <Table data={mockNFormat.percentages} title="Percentages" />
      <Table data={mockNFormat.exponential} title="Exponential" />
      <Table data={mockNFormat.falsely} title="Falsely" />
      <Table data={mockNFormat.clever} title="Clever" />
      <Table data={mockNFormat.zhWYZ} title="zhWYZ" />
    </div>
  );
};
