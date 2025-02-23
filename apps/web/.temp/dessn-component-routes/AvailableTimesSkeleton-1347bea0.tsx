import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailableTimesSkeleton } from '../../../../packages/features/bookings/components/AvailableTimes';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <AvailableTimesSkeleton className={state.className.value} />
  );
}