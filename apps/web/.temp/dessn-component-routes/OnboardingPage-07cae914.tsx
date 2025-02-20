import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create a dynamic import for the component to allow for error handling
const ImportedComponent = React.lazy(() => {
  // Mock the Prisma types before importing the component
  const mockPrisma = {
    SchedulingType: {
      ROUND_ROBIN: 'ROUND_ROBIN',
      COLLECTIVE: 'COLLECTIVE',
      MANAGED: 'MANAGED'
    }
  };

  // Mock the Prisma module
  if (typeof window !== 'undefined') {
    window.prismaClient = mockPrisma;
    // Mock the module system
    const originalImport = window.require || (() => {});
    window.require = (modulePath: string) => {
      if (modulePath.includes('@calcom/prisma')) {
        return mockPrisma;
      }
      return originalImport(modulePath);
    };
  }

  return import('../../modules/apps/installation/[[...step]]/step-view').catch(() => ({
    default: () => <div>Failed to load component</div>
  }));
});

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return <div>Something went wrong. Please try again.</div>;
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appMetadata: {
      type: "string",
      value: JSON.stringify({
        name: "Sample App",
        type: "calendar_other",
        categories: ["calendar"],
        variant: "other",
        slug: "sample-app"
      }),
      label: "App Metadata"
    },
    step: {
      type: "dropdown",
      value: "accounts_step",
      options: ["accounts_step", "event_types_step", "configure_step"],
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

  const props = {
    appMetadata: JSON.parse(state.appMetadata.value),
    step: state.step.value,
    teams: [],
    personalAccount: {
      id: 1,
      avatarUrl: "",
      name: "Personal Account",
      alreadyInstalled: false
    },
    eventTypeGroups: [{
      teamId: null,
      profiles: [{
        id: 1,
        name: "Personal Account",
        slug: "personal",
        image: "",
        eventTypes: [{
          id: 1,
          title: "Default Event",
          slug: "default-event",
          length: 30,
          description: "",
          schedulingType: "ROUND_ROBIN",
          hidden: false,
          position: 0,
          metadata: {},
          locations: [],
          bookingFields: [],
          selected: false,
          requiresConfirmation: false,
          destinationCalendar: null,
          seatsPerTimeSlot: null
        }]
      }],
      metadata: {
        membershipCount: 1,
        readOnly: false
      }
    }],
    userName: state.userName.value,
    credentialId: 1,
    showEventTypesStep: state.showEventTypesStep.value,
    isConferencing: state.isConferencing.value,
    installableOnTeams: state.installableOnTeams.value,
    isOrg: state.isOrg.value
  };

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="h-full dark:bg-gray-900">
          <ImportedComponent {...props} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}