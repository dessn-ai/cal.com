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
    profile: { 
      name: "John Doe", 
      image: "https://example.com/avatar.jpg",
      slug: "john-doe",
      username: "johndoe",
      organization: { slug: "org" }
    },
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
    entity: { 
      name: "Team", 
      slug: "team",
      teamSlug: "team",
      orgSlug: "org",
      logoUrl: "https://example.com/logo.jpg",
      members: [
        {
          name: "John Doe",
          username: "johndoe",
          email: "john@example.com",
          bio: "Team member",
          avatar: "https://example.com/avatar.jpg"
        }
      ]
    },
    isDynamic: false,
    autoTranslateDescriptionEnabled: true,
    subsetOfUsers: [
      {
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
        bio: "Team member",
        avatar: "https://example.com/avatar.jpg",
        profile: {
          username: "johndoe",
          organization: { slug: "org" }
        }
      }
    ],
    users: [
      {
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
        bio: "Team member",
        avatar: "https://example.com/avatar.jpg",
        profile: {
          username: "johndoe",
          organization: { slug: "org" }
        }
      }
    ],
    hosts: [
      {
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
        bio: "Team member",
        avatar: "https://example.com/avatar.jpg"
      }
    ],
    metadata: {
      apps: {
        stripe: {
          enabled: true,
          price: 100,
          currency: "USD"
        }
      }
    },
    bookingFields: [],
    hashedLink: null,
    periodType: "UNLIMITED",
    periodStartDate: null,
    periodEndDate: null,
    periodDays: null,
    periodCountCalendarDays: null,
    id: 1,
    position: 0,
    slug: "sample-event",
    owner: {
      id: 1,
      name: "John Doe",
      email: "john@example.com"
    }
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