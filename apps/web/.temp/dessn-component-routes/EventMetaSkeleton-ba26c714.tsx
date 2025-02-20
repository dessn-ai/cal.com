import React from 'react';
import { useParentState } from '../useIframeState';
import { EventMetaSkeleton } from '../../../../packages/features/bookings/components/event-meta/Skeleton';


export default function ComponentPreview() {
  // Since EventMetaSkeleton doesn't accept any props, we don't need to use useParentState
  // However, we'll keep it here in case we want to add configurable options in the future
  const [state, setState] = useParentState({});

  return <EventMetaSkeleton />;
}