import React from 'react';
import { useParentState } from '../useIframeState';
import { FormSkeleton } from '../../../../packages/features/bookings/Booker/components/BookEventForm/Skeleton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <FormSkeleton />;
}