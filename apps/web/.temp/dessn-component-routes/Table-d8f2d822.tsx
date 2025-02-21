import React from 'react';
import { useParentState } from '../useIframeState';

// Create simplified table components for the preview
const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <table
      ref={ref}
      className={`w-full border border-gray-200 ${className || ''}`}
      {...props}
    />
  )
);
Table.displayName = "Table";

const TableHeader = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className="bg-gray-50" {...props}>{children}</thead>
);

const TableBody = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody {...props}>{children}</tbody>
);

const TableFooter = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tfoot className="bg-gray-50" {...props}>{children}</tfoot>
);

const TableRow = ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className="border-b border-gray-200" {...props}>{children}</tr>
);

const TableHead = ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th className="px-4 py-2 text-left" {...props}>{children}</th>
);

const TableCell = ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className="px-4 py-2" {...props}>{children}</td>
);

const TableCaption = ({ children, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) => (
  <caption className="mt-4 text-sm text-gray-500" {...props}>{children}</caption>
);

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
      <TableHeader>
        <TableRow>
          <TableHead>Header 1</TableHead>
          <TableHead>Header 2</TableHead>
          <TableHead>Header 3</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 4</TableCell>
          <TableCell>Cell 5</TableCell>
          <TableCell>Cell 6</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Footer</TableCell>
        </TableRow>
      </TableFooter>
      <TableCaption>Table Caption</TableCaption>
    </Table>
  );
}