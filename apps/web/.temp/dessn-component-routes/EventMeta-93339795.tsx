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
    metadata: {},
    length: 60,
    schedule: { timeZone: "America/New_York" },
    locations: [{ type: "InPerson", address: "123 Main St" }],
    lockTimeZoneToggleOnBookingPage: false,
    requiresConfirmation: false,
    autoTranslateDescriptionEnabled: false,
    recurringEvent: null,
    seatsPerTimeSlot: 10,
    schedulingType: "COLLECTIVE",
    price: 0,
    currency: "USD",
    fieldTranslations: [],
    entity: {
      teamSlug: "sample-team",
      orgSlug: "sample-org",
      name: "Sample Team",
      logoUrl: "https://example.com/logo.png"
    },
    isDynamic: false,
    subsetOfUsers: [
      {
        name: "John Doe",
        username: "johndoe",
        avatarUrl: "https://example.com/avatar.jpg",
        weekStart: "Monday",
        profile: { 
          name: "John Doe",
          username: "johndoe",
          organization: {
            slug: "sample-org"
          }
        },
      },
    ],
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