import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/zoho-bigin/components/EventTypeAppCardInterface';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock the useIsAppEnabled hook functionality
const MockIsAppEnabledProvider = ({ children }) => {
  const mockValue = {
    enabled: true,
    updateEnabled: () => {},
  };

  // Create a context to provide the mock value
  const IsAppEnabledContext = React.createContext(mockValue);
  
  return (
    <IsAppEnabledContext.Provider value={mockValue}>
      {children}
    </IsAppEnabledContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        description: "This is a sample event type description",
        teamId: null,
        length: 30,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: {
          id: null,
          name: null
        },
        schedulingType: "COLLECTIVE",
        URL: "https://example.com/event-type"
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Zoho Bigin",
        description: "Zoho Bigin integration",
        installed: true,
        type: "zoho_bigin_other_calendar",
        variant: "other_calendar",
        key: "zoho-bigin",
        dirName: "zoho-bigin",
        logo: "icon.svg",
        publisher: "Cal.com",
        url: "https://www.zoho.com/bigin/",
        verified: true,
        rating: 0,
        reviews: 0,
        category: "other",
        slug: "zoho-bigin",
        trending: false,
        email: "help@cal.com",
        credentials: [],
        credentialIds: []
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MockIsAppEnabledProvider>
        <ImportedComponent
          eventType={state.eventType.value}
          app={state.app.value}
          disabled={state.disabled.value}
        />
      </MockIsAppEnabledProvider>
    </QueryClientProvider>
  );
}