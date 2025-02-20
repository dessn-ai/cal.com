import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/hubspot/components/EventTypeAppCardInterface';

// Mock the useIsAppEnabled hook directly
const mockUseIsAppEnabled = () => ({
  enabled: true,
  updateEnabled: () => Promise.resolve(),
  isLoading: false,
});

// Create an error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

// Create a wrapped version of the imported component
const WrappedComponent = (props) => {
  // Override the useIsAppEnabled hook
  const originalModule = require('@calcom/app-store/_utils/useIsAppEnabled');
  originalModule.useIsAppEnabled = mockUseIsAppEnabled;

  try {
    return <ImportedComponent {...props} />;
  } catch (error) {
    console.error('Error rendering component:', error);
    return <div>Error rendering component</div>;
  }
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
        team: null,
        schedulingType: "COLLECTIVE",
        URL: "https://example.com/event-type",
        metadata: {},
        apps: {
          hubspot: {
            enabled: true
          }
        }
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Hubspot",
        description: "Hubspot integration",
        logo: "https://example.com/hubspot-logo.png",
        category: "crm",
        url: "https://www.hubspot.com",
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.png"
        },
        credentialIds: [1, 2, 3],
        enabled: true,
        dirName: "hubspot",
        slug: "hubspot"
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
    <ErrorBoundary>
      <WrappedComponent
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </ErrorBoundary>
  );
}

// Prevent the actual useIsAppEnabled hook from being used
if (typeof window !== 'undefined') {
  window.__DESSN_MOCK_HOOKS__ = {
    useIsAppEnabled: mockUseIsAppEnabled
  };
}