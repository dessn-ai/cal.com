import React from 'react';
import { useParentState } from '../useIframeState';
import { EventAdvancedTab } from '../../../../packages/features/eventtypes/components/tabs/advanced/EventAdvancedTab';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        workflows: [],
        seatsPerTimeSlot: null,
        bookerUrl: "sample-url",
      },
      label: "Event Type",
    },
    team: {
      type: "object",
      value: null,
      label: "Team",
    },
    calendarsQuery: {
      type: "object",
      value: {
        data: undefined,
        isPending: false,
        error: null,
      },
      label: "Calendars Query",
    },
    user: {
      type: "object",
      value: {
        email: "user@example.com",
        secondaryEmails: [],
        theme: "light",
        defaultBookerLayouts: {},
      },
      label: "User",
    },
    isUserLoading: {
      type: "boolean",
      value: false,
      label: "Is User Loading",
    },
    showBookerLayoutSelector: {
      type: "boolean",
      value: true,
      label: "Show Booker Layout Selector",
    },
  });

  const showToast = (message: string, variant: "success" | "warning" | "error") => {
    console.log(`Toast: ${message} (${variant})`);
  };

  return (
    <EventAdvancedTab
      eventType={state.eventType.value}
      team={state.team.value}
      calendarsQuery={state.calendarsQuery.value}
      user={state.user.value}
      isUserLoading={state.isUserLoading.value}
      showToast={showToast}
      showBookerLayoutSelector={state.showBookerLayoutSelector.value}
    />
  );
}