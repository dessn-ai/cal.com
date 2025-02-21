import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/users/components/CalendarCredentialBanner';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    data: {
      type: "boolean",
      value: true,
      label: "Show Banner",
    },
  });

  const mockData = state.data.value
    ? {
        // Mocking the structure of RouterOutputs["viewer"]["getUserTopBanners"]["calendarCredentialBanner"]
        // Adjust this structure if needed based on the actual data shape
        error: true,
        message: "Calendar credential error",
      }
    : null;

  return <ImportedComponent data={mockData} />;
}