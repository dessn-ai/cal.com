import React from 'react';
import { useParentState } from '../useIframeState';
import { Table } from '../../../../packages/ui/components/table/TableNew';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-table-class",
      label: "Class Name",
    },
  });

  return (
    <Table className={state.className.value}>
      <Table.Header>
        <Table.Row>
          <Table.Head>Header 1</Table.Head>
          <Table.Head>Header 2</Table.Head>
          <Table.Head>Header 3</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Cell 1</Table.Cell>
          <Table.Cell>Cell 2</Table.Cell>
          <Table.Cell>Cell 3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell 4</Table.Cell>
          <Table.Cell>Cell 5</Table.Cell>
          <Table.Cell>Cell 6</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>Footer</Table.Cell>
        </Table.Row>
      </Table.Footer>
      <Table.Caption>Table Caption</Table.Caption>
    </Table>
  );
}