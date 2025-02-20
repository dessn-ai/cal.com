import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypesCTA } from '../../modules/event-types/views/event-types-listing-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <EventTypesCTA />;
}