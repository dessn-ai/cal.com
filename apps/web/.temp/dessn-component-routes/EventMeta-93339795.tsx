import React from 'react';
import { useParentState } from '../useIframeState';
import { EventMeta } from '../../../../packages/features/bookings/Booker/components/EventMeta';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    isPrivateLink: {
      type: "boolean",
      value: false,
      label: "Is Private Link",
    },
    isPlatform: {
      type: "boolean",
      value: true,
      label: "Is Platform",
    },
    locale: {
      type: "string",
      value: "en",
      label: "Locale",
    },
  });

  const mockEvent = {
    title: "Sample Event",
    profile: { name: "John Doe", image: "https://example.com/avatar.jpg" },
    description: "This is a sample event description.",
    length: 60,
    price: 100,
    currency: "USD",
    schedulingType: "COLLECTIVE",
    locations: [{ type: "integrations:daily" }],
    lockTimeZoneToggleOnBookingPage: false,
    requiresConfirmation: false,
    recurringEvent: null,
    seatsPerTimeSlot: 10,
    schedule: { timeZone: "America/New_York" },
    entity: { name: "Team", slug: "team" },
    isDynamic: false,
    autoTranslateDescriptionEnabled: true,
  };

  return (
    <EventMeta
      event={mockEvent}
      isPending={state.isPending.value}
      isPrivateLink={state.isPrivateLink.value}
      isPlatform={state.isPlatform.value}
      locale={state.locale.value}
    />
  );
}