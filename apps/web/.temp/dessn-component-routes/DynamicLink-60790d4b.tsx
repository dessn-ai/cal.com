import React from 'react';
import { useParentState } from '../useIframeState';
import { DynamicLink } from '../../../../packages/features/users/components/UserTable/BulkActions/DynamicLink';

// Mock the required dependencies
const mockUseLocale = () => ({
  t: (key: string) => key,
});

const mockUseCopy = () => ({
  copyToClipboard: () => {},
  isCopied: false,
});

// Mock the nuqs hooks
const mockUseQueryState = () => [true, () => {}];

// Add global mocks
global["@calcom/lib/hooks/useLocale"] = mockUseLocale;
global["@calcom/lib/hooks/useCopy"] = mockUseCopy;
global["nuqs"] = {
  useQueryState: mockUseQueryState,
  parseAsBoolean: (value: any) => Boolean(value),
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selectedRows: {
      type: 'array',
      value: [
        { username: 'user1' },
        { username: 'user2' }
      ],
      label: 'Selected Rows',
    },
    domain: {
      type: 'string',
      value: 'https://example.com',
      label: 'Domain',
    },
  });

  // Create the table object at render time instead of storing it in state
  const table = {
    getSelectedRowModel: () => ({
      rows: state.selectedRows.value.map(user => ({ original: user })),
      flatRows: state.selectedRows.value.map(user => ({ original: user }))
    })
  };

  return (
    <DynamicLink
      table={table as any}
      domain={state.domain.value}
    />
  );
}