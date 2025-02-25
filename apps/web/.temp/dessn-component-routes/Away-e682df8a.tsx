import React from 'react';
import { useParentState } from '../useIframeState';
import { Away } from '../../../../packages/features/bookings/Booker/components/Unavailable';


export default function ComponentPreview() {
  // Since Away component doesn't have any props, we don't need to use useParentState
  // However, we'll keep it here for consistency and potential future use
  const [state, setState] = useParentState({});

  return <Away />;
}