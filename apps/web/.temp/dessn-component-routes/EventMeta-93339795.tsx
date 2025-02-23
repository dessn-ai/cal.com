import React from 'react';
import { useParentState } from '../useIframeState';
import { EventMeta } from '../../../../packages/features/bookings/Booker/components/EventMeta';
import { BookerStore, useBookerStore } from '../../../../packages/features/bookings/Booker/store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        former_time: 'Former Time',
      }
    }
  }
});

// Mock store initialization
if (typeof window !== 'undefined') {
  const initialState = {
    state: "selecting",
    timezone: "America/New_York",
    selectedDuration: 60,
    selectedTimeslot: null,
    bookingData: {
      attendees: []
    },
    seatedEventData: {
      seatsPerTimeSlot: 10,
      attendees: 0,
      showAvailableSeatsCount: true
    },
    rescheduleUid: null
  };

  // Initialize the store with default values
  Object.entries(initialState).forEach(([key, value]) => {
    useBookerStore.setState({ [key]: value });
  });
}

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
      username: "johndoe"
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
      logoUrl: "https://example.com/logo.jpg"
    },
    isDynamic: false,
    metadata: {},
    paymentInfo: {
      price: 100,
      currency: "USD",
      paymentOption: "ON_BOOKING"
    },
    autoTranslateDescriptionEnabled: true,
    subsetOfUsers: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        username: "johndoe",
        profile: {
          username: "johndoe",
          organization: {
            slug: "org"
          }
        }
      }
    ],
    users: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        username: "johndoe",
        profile: {
          username: "johndoe",
          organization: {
            slug: "org"
          }
        }
      }
    ],
    fieldTranslations: [],
    hosts: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        username: "johndoe"
      }
    ],
    bookingFields: []
  };

  return (
    <I18nextProvider i18n={i18next}>
      <EventMeta
        event={mockEvent}
        isPending={state.isPending.value}
        isPrivateLink={state.isPrivateLink.value}
        isPlatform={state.isPlatform.value}
        locale={state.locale.value}
      />
    </I18nextProvider>
  );
}