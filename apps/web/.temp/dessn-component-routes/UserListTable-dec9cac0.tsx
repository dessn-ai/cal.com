// Mock the OrgBranding module before any imports
const mockOrgBrandingModule = {
  useOrgBranding: () => ({
    orgBranding: {
      theme: null,
      logo: '',
      brandColor: '',
      darkBrandColor: '',
      name: 'Test Organization',
    },
    isLoading: false
  })
};

// Override the module
module.exports = {
  '@calcom/features/ee/organizations/context/provider': mockOrgBrandingModule
};

import React from 'react';
import { useParentState } from '../useIframeState';
import { UserListTable } from '../../../../packages/features/users/components/UserTable/UserListTable';
import { DataTableProvider } from '@calcom/features/data-table';

// Mock the data-table hooks
const mockDataTable = {
  useDataTable: () => ({
    data: [],
    setData: () => {},
    isLoading: false,
    tableState: {},
    setTableState: () => {},
    onTableStateChange: () => {},
    page: 0,
    setPage: () => {},
    pageSize: 10,
    setPageSize: () => {},
    selectedRows: [],
    setSelectedRows: () => {},
  })
};

// Add mock to global scope
if (typeof global !== 'undefined') {
  global["@calcom/features/data-table/hooks/useDataTable"] = mockDataTable.useDataTable;
}

// Simple wrapper component
const ContextWrapper = ({ children }) => {
  return (
    <DataTableProvider>
      {children}
    </DataTableProvider>
  );
};

// Try/catch wrapper for the UserListTable
const SafeUserListTable = (props) => {
  try {
    return <UserListTable {...props} />;
  } catch (error) {
    console.error('Error rendering UserListTable:', error);
    return <div>Error loading table</div>;
  }
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
    <ContextWrapper>
      <SafeUserListTable
        className={state.className.value}
        payouts={JSON.parse(state.payouts.value)}
        isLoading={state.isLoading.value}
        props={JSON.parse(state.props.value)}
      />
    </ContextWrapper>
  );
}

// Make sure the mock is available
if (typeof window !== 'undefined') {
  window['@calcom/features/ee/organizations/context/provider'] = mockOrgBrandingModule;
}