import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Create a dynamic import wrapper for the component
const ImportedComponent = React.lazy(() => {
  // Mock the Prisma client before importing the component
  const mockPrismaModule = {
    SchedulingType: {
      ROUND_ROBIN: 'ROUND_ROBIN',
      COLLECTIVE: 'COLLECTIVE',
      MANAGED: 'MANAGED'
    }
  };

  // Create a mock module for Prisma
  window.mockModules = {
    '@prisma/client': mockPrismaModule
  };

  // Now import the component
  return import('../../modules/apps/installation/[[...step]]/step-view').catch(error => ({
    default: () => <div>Error loading component: {error.message}</div>
  }));
});

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        app_successfully_installed: "App successfully installed",
        app_could_not_be_installed: "App could not be installed",
        event_type_updated_successfully: "Event type updated successfully",
        error_event_type_unauthorized_update: "Unauthorized to update event type",
        unexpected_error_try_again: "Unexpected error, please try again",
        select_account_header: "Select Account",
        select_account_description: "Select account for {{appName}}",
        select_event_types_header: "Select Event Types",
        select_event_types_description: "Select event types for {{appName}}",
        configure_app_header: "Configure {{appName}}",
        configure_app_description: "Configure your app settings"
      }
    }
  }
});

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock Feature Flags Provider
const FeatureProvider = ({ children }) => {
  return <>{children}</>;
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again.</div>;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appMetadata: {
      type: "string",
      value: JSON.stringify({
        name: "Sample App",
        type: "calendar_other",
        categories: ["calendar"],
        slug: "sample-app",
        variant: "other_calendar"
      }),
      label: "App Metadata"
    },
    step: {
      type: "string",
      value: "accounts_step",
      label: "Current Step"
    },
    userName: {
      type: "string",
      value: "John Doe",
      label: "User Name"
    },
    showEventTypesStep: {
      type: "boolean",
      value: true,
      label: "Show Event Types Step"
    },
    isConferencing: {
      type: "boolean",
      value: false,
      label: "Is Conferencing"
    },
    installableOnTeams: {
      type: "boolean",
      value: true,
      label: "Installable on Teams"
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization"
    }
  });

  const personalAccount = {
    id: 1,
    avatarUrl: "https://example.com/avatar.jpg",
    name: "John Doe",
    alreadyInstalled: false
  };

  // Mock event type groups with the scheduling type as a string
  const mockEventTypeGroups = [
    {
      teamId: undefined,
      userId: 1,
      slug: "personal",
      name: "Personal",
      image: "https://example.com/avatar.jpg",
      eventTypes: [
        {
          id: 1,
          title: "Sample Event Type",
          slug: "sample-event",
          length: 30,
          schedulingType: "ROUND_ROBIN", // Use string directly instead of enum
          selected: false,
          metadata: null,
          locations: [],
          bookingFields: []
        }
      ]
    }
  ];

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <FeatureProvider>
          <SessionProvider session={null}>
            <I18nextProvider i18n={i18n}>
              <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                  <ImportedComponent
                    appMetadata={JSON.parse(state.appMetadata.value)}
                    step={state.step.value}
                    userName={state.userName.value}
                    showEventTypesStep={state.showEventTypesStep.value}
                    isConferencing={state.isConferencing.value}
                    installableOnTeams={state.installableOnTeams.value}
                    isOrg={state.isOrg.value}
                    personalAccount={personalAccount}
                    eventTypeGroups={mockEventTypeGroups}
                  />
                </TooltipProvider>
              </QueryClientProvider>
            </I18nextProvider>
          </SessionProvider>
        </FeatureProvider>
      </Suspense>
    </ErrorBoundary>
  );
}