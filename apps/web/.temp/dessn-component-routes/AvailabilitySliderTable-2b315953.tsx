import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilitySliderTable } from '../../../../packages/features/timezone-buddy/components/AvailabilitySliderTable';

import { TBContext, createTimezoneBuddyStore } from '../../../../packages/features/timezone-buddy/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    userTimeFormat: {
      type: "number",
      value: 24,
      label: "User Time Format",
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
  });

  const tbStore = createTimezoneBuddyStore({
    browsingDate: new Date(),
  });

  return (
    <TBContext.Provider value={tbStore}>
      <AvailabilitySliderTable 
        userTimeFormat={state.userTimeFormat.value} 
        isOrg={state.isOrg.value} 
      />
    </TBContext.Provider>
  );
}