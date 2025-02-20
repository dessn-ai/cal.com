import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterPopover as OriginalFilterPopover } from '../../../../packages/features/data-table/components/filters/FilterPopover';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Create a simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

// Create a basic context with required values
const DataTableContext = React.createContext({
  activeFilters: [],
  setFilters: () => {},
  removeFilter: () => {},
  filters: {},
  selectedRows: new Set(),
  setSelectedRows: () => {},
  data: [],
  tableState: {
    sorting: [],
    pagination: { pageIndex: 0, pageSize: 10 }
  },
  setTableState: () => {},
  columns: []
});

const FilterPopover = (props) => {
  return (
    <ErrorBoundary>
      <DataTableContext.Provider
        value={{
          activeFilters: [],
          setFilters: () => {},
          removeFilter: () => {},
          filters: {},
          selectedRows: new Set(),
          setSelectedRows: () => {},
          data: [],
          tableState: {
            sorting: [],
            pagination: { pageIndex: 0, pageSize: 10 }
          },
          setTableState: () => {},
          columns: [props.column]
        }}
      >
        <div>
          <OriginalFilterPopover {...props} />
        </div>
      </DataTableContext.Provider>
    </ErrorBoundary>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    column: {
      type: "dropdown",
      value: JSON.stringify({
        id: "example-column",
        title: "Example Column",
        icon: "filter",
        type: ColumnFilterType.SINGLE_SELECT,
        options: [
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
        ],
      }),
      options: [
        JSON.stringify({
          id: "example-column",
          title: "Example Column",
          icon: "filter",
          type: ColumnFilterType.SINGLE_SELECT,
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
          ],
        }),
        JSON.stringify({
          id: "another-column",
          title: "Another Column",
          icon: "calendar",
          type: ColumnFilterType.DATE_RANGE,
        }),
      ],
      label: "Column Configuration",
    },
  });

  const column = JSON.parse(state.column.value);

  return <FilterPopover column={column} />;
}