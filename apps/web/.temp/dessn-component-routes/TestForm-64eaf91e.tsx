import React, { Suspense, createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Initialize i18next with basic configuration
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {}
    }
  },
  fallbackLng: 'en'
});

// Create a mock session context
const SessionContext = createContext({
  data: {
    user: {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      username: 'testuser',
      role: 'ADMIN',
      locale: 'en',
      teams: [{ id: 1, name: 'Test Team', slug: 'test-team' }]
    },
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  },
  status: "authenticated",
  update: () => Promise.resolve(null)
});

// Export useSession mock
export const useSession = () => useContext(SessionContext);

// Mock Session Provider
const MockSessionProvider = ({ children }) => (
  <SessionContext.Provider 
    value={{
      data: {
        user: {
          id: 1,
          name: 'Test User',
          email: 'test@example.com',
          username: 'testuser',
          role: 'ADMIN',
          locale: 'en',
          teams: [{ id: 1, name: 'Test Team', slug: 'test-team' }]
        },
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      },
      status: "authenticated",
      update: () => Promise.resolve(null)
    }}
  >
    {children}
  </SessionContext.Provider>
);

// Mock TRPC Provider with basic functionality
const TRPCContext = createContext({
  client: {
    query: () => Promise.resolve(null),
    mutation: () => Promise.resolve(null)
  }
});

const MockTRPCProvider = ({ children }) => (
  <TRPCContext.Provider 
    value={{
      client: {
        query: () => Promise.resolve(null),
        mutation: () => Promise.resolve(null)
      }
    }}
  >
    {children}
  </TRPCContext.Provider>
);

// Mock InsightsProvider with required functionality
const InsightsContext = createContext({
  filter: {
    dateRange: 'last7days',
    teamId: null,
  },
  setFilter: () => {},
  loading: false,
  data: {
    metrics: {},
    events: []
  }
});

const MockInsightsProvider = ({ children }) => (
  <InsightsContext.Provider
    value={{
      filter: {
        dateRange: 'last7days',
        teamId: null,
      },
      setFilter: () => {},
      loading: false,
      data: {
        metrics: {},
        events: []
      }
    }}
  >
    {children}
  </InsightsContext.Provider>
);

// Mock Feature Flag Provider with comprehensive features
const FeatureFlagContext = createContext({
  features: {
    routing_forms: true,
    workflows: true,
    teams: true,
    license: true
  }
});

const MockFeatureFlagProvider = ({ children }) => (
  <FeatureFlagContext.Provider
    value={{
      features: {
        routing_forms: true,
        workflows: true,
        teams: true,
        license: true
      }
    }}
  >
    {children}
  </FeatureFlagContext.Provider>
);

// Wrap the import in a try-catch with better error handling
let ImportedComponent;
try {
  ImportedComponent = React.lazy(() => import('../../../../packages/app-store/routing-forms/components/SingleForm'));
} catch (error) {
  console.error('Failed to import SingleForm component:', error);
  ImportedComponent = () => <div>Error: Could not load form component</div>;
}

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      name: '',
      description: '',
    }
  });

  const [state, setState] = useParentState({
    form: {
      type: "object",
      value: {
        id: "123",
        name: "Sample Form",
        description: "This is a sample form",
        teamId: 1,
        routes: [],
        fields: [],
        settings: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        _count: { responses: 0 },
        team: { slug: "team-slug", name: "Team Name" },
        connectedForms: [],
        routers: [],
        teamMembers: []
      },
      label: "Form"
    },
    showAllData: {
      type: "boolean",
      value: true,
      label: "Show All Data"
    },
    renderFooter: {
      type: "dropdown",
      value: "default",
      options: ["default", "custom"],
      label: "Render Footer"
    }
  });

  const renderFooter = state.renderFooter.value === "custom" 
    ? (onClose: () => void) => <div>Custom Footer <button onClick={onClose}>Close</button></div>
    : undefined;

  return (
    <ErrorBoundary>
      <MockSessionProvider>
        <I18nextProvider i18n={i18next}>
          <MockFeatureFlagProvider>
            <MockInsightsProvider>
              <MockTRPCProvider>
                <FormProvider {...methods}>
                  <Suspense fallback={<div>Loading form component...</div>}>
                    <ImportedComponent
                      form={state.form.value}
                      showAllData={state.showAllData.value}
                      renderFooter={renderFooter}
                    />
                  </Suspense>
                </FormProvider>
              </MockTRPCProvider>
            </MockInsightsProvider>
          </MockFeatureFlagProvider>
        </I18nextProvider>
      </MockSessionProvider>
    </ErrorBoundary>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: Failed to render component. Check console for details.</div>;
    }
    return this.props.children;
  }
}