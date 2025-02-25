import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/bookings/views/booking-dry-run-success-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props are required for this component
  });

  return <ImportedComponent />;
}