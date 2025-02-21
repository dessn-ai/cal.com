import React from 'react';
import { useParentState } from '../useIframeState';
import { Troubleshooter } from '../../../../packages/features/troubleshooter/Troubleshooter';

// Mock TroubleshooterStoreProvider directly in the preview file
const TroubleshooterStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    month: {
      type: "string",
      value: new Date().toISOString().slice(0, 7),
      label: "Month (YYYY-MM)",
    },
    selectedDate: {
      type: "string",
      value: new Date().toISOString().slice(0, 10),
      label: "Selected Date",
    },
  });

  return (
    <TroubleshooterStoreProvider>
      <Troubleshooter
        month={state.month.value}
        selectedDate={state.selectedDate.value ? new Date(state.selectedDate.value) : undefined}
      />
    </TroubleshooterStoreProvider>
  );
}