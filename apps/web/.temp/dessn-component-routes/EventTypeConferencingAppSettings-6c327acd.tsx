import React from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Mock the SchedulingType enum
const SchedulingType = {
  ROUND_ROBIN: "ROUND_ROBIN",
  COLLECTIVE: "COLLECTIVE",
  MANAGED: "MANAGED"
} as const;

type TSchedulingType = typeof SchedulingType[keyof typeof SchedulingType];

// Mock types
type TEventType = {
  id: number;
  title: string;
  description: string;
  teamId: number | null;
  length: number;
  recurringEvent: any | null;
  seatsPerTimeSlot: number | null;
  team: any | null;
  URL: string;
  schedulingType: TSchedulingType;
  slug: string;
  metadata: Record<string, any>;
  position: number;
  destinationCalendar: any | null;
  selected: boolean;
  locations: any[];
  bookingFields: any[];
  locationOptions?: any[];
};

// Mock component instead of importing the real one
const MockEventTypeConferencingAppSettings = ({ eventType, slug }: { eventType: TEventType; slug: string }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-medium">Conference Settings Preview</h3>
      <div className="mt-4">
        <p>Event Type: {eventType.title}</p>
        <p>Scheduling Type: {eventType.schedulingType}</p>
        <p>Slug: {slug}</p>
      </div>
    </div>
  );
};

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        location: 'Location',
        default: 'Default',
        members_default_location: 'Members Default Location'
      }
    }
  }
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function ComponentPreview() {
  const formMethods = useForm();
  
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        description: "This is a sample event description",
        teamId: null,
        length: 60,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: null,
        URL: "https://example.com/event",
        schedulingType: SchedulingType.ROUND_ROBIN,
        slug: "sample-event",
        metadata: {},
        position: 0,
        destinationCalendar: null,
        selected: false,
        locations: [],
        bookingFields: [],
      },
      label: "Event Type",
    },
    slug: {
      type: "string",
      value: "sample-app",
      label: "Slug",
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <FormProvider {...formMethods}>
          <MockEventTypeConferencingAppSettings
            eventType={state.eventType.value}
            slug={state.slug.value}
          />
        </FormProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}