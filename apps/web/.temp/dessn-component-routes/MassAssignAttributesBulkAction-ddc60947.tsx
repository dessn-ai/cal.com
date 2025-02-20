import React from 'react';
import { useParentState } from '../useIframeState';
import { MassAssignAttributesBulkAction } from '../../../../packages/features/users/components/UserTable/BulkActions/MassAssignAttributes';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: 'object',
      value: {
        // Instead of passing a function, we pass the data structure directly
        selectedRowModel: {
          flatRows: []
        },
        getSelectedRowModel: undefined // This will be handled in the component
      },
      label: 'Table',
    },
    filters: {
      type: 'object',
      value: [],
      label: 'Filters',
    },
  });

  // Create a table object that matches the expected interface
  const tableWithMethods = {
    ...state.table.value,
    getSelectedRowModel: () => state.table.value.selectedRowModel
  };

  return (
    <React.Suspense fallback="Loading...">
      <ErrorBoundary>
        <MassAssignAttributesBulkAction
          table={tableWithMethods}
          filters={state.filters.value}
        />
      </ErrorBoundary>
    </React.Suspense>
  );
}

// Simple error boundary component
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (hasError) {
      console.error('Error occurred in MassAssignAttributesBulkAction preview');
    }
  }, [hasError]);

  if (hasError) {
    return <div>Something went wrong. Please check the console for details.</div>;
  }

  return <>{children}</>;
}