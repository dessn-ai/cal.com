import React from 'react';
import { useParentState } from '../useIframeState';
import { Table } from '../../../../packages/ui/components/table/Table';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-table",
      label: "Class Name",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
  });

  const sampleData = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];

  return (
    <Table className={state.className.value}>
      <Table.Header>
        <Table.ColumnTitle>ID</Table.ColumnTitle>
        <Table.ColumnTitle>Name</Table.ColumnTitle>
        <Table.ColumnTitle>Email</Table.ColumnTitle>
      </Table.Header>
      <Table.Body>
        {sampleData.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}