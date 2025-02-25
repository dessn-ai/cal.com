import React from 'react';
import { useParentState } from '../useIframeState';
import { CalendarListContainer } from '../../components/apps/CalendarListContainer';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    heading: {
      type: "boolean",
      value: true,
      label: "Show Heading",
    },
    fromOnboarding: {
      type: "boolean",
      value: false,
      label: "From Onboarding",
    },
  });

  return (
    <CalendarListContainer
      heading={state.heading.value}
      fromOnboarding={state.fromOnboarding.value}
    />
  );
}