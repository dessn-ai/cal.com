import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTableProvider } from '@calcom/features/data-table';

// Create a simplified version of UserListTable
const SimplifiedUserListTable = ({
  className,
  payouts,
  isLoading,
  props
}) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">User List Table Preview</h2>
        <div className="bg-white rounded-lg shadow">
          <div className="p-4">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <p>Payouts: {JSON.stringify(payouts, null, 2)}</p>
                <p>Props: {JSON.stringify(props, null, 2)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    payouts: {
      type: "string",
      value: "{}",
      label: "Payouts",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    props: {
      type: "string",
      value: "{}",
      label: "Table Props",
    },
  });

  return (
    <DataTableProvider>
      <SimplifiedUserListTable
        className={state.className.value}
        payouts={JSON.parse(state.payouts.value)}
        isLoading={state.isLoading.value}
        props={JSON.parse(state.props.value)}
      />
    </DataTableProvider>
  );
}