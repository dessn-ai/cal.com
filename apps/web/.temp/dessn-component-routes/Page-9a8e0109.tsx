import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
});

// Create Query Client
const queryClient = new QueryClient();

// Mock Providers to simplify the setup
const MockOrgBrandingProvider = ({ children }) => <>{children}</>;
const MockFeatureProvider = ({ children }) => <>{children}</>;
const MockTRPCProvider = ({ children }) => <>{children}</>;

// Error Boundary Component
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
      return <div>Something went wrong. Please try again.</div>;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
    eventData: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        length: 60,
        metadata: {},
        entity: { name: "Test Entity" },
        title: "Test Event",
        hidden: false,
        profile: {
          image: "https://example.com/image.jpg",
          name: "John Doe",
          username: "johndoe",
        },
        users: [
          { username: "user1", name: "User One" },
          { username: "user2", name: "User Two" },
        ],
      }),
      label: "Event Data",
    },
    rescheduleUid: {
      type: "string",
      value: null,
      label: "Reschedule UID",
    },
    bookingUid: {
      type: "string",
      value: null,
      label: "Booking UID",
    },
    user: {
      type: "string",
      value: "testuser",
      label: "User",
    },
    slug: {
      type: "string",
      value: "test-slug",
      label: "Slug",
    },
    isBrandingHidden: {
      type: "boolean",
      value: false,
      label: "Is Branding Hidden",
    },
    isSEOIndexable: {
      type: "boolean",
      value: true,
      label: "Is SEO Indexable",
    },
    themeBasis: {
      type: "string",
      value: null,
      label: "Theme Basis",
    },
    orgBannerUrl: {
      type: "string",
      value: null,
      label: "Org Banner URL",
    },
  });

  const props = {
    isEmbed: state.isEmbed.value,
    eventData: JSON.parse(state.eventData.value),
    rescheduleUid: state.rescheduleUid.value,
    bookingUid: state.bookingUid.value,
    user: state.user.value,
    slug: state.slug.value,
    isBrandingHidden: state.isBrandingHidden.value,
    isSEOIndexable: state.isSEOIndexable.value,
    themeBasis: state.themeBasis.value,
    orgBannerUrl: state.orgBannerUrl.value,
    trpcState: {},
  };

  const ImportedComponent = React.lazy(() => 
    import('../../pages/org/[orgSlug]/[user]/[type]/embed').catch(() => ({
      default: () => <div>Failed to load component</div>
    }))
  );

  return (
    <ErrorBoundary>
      <SessionProvider session={null}>
        <I18nextProvider i18n={i18n}>
          <MockTRPCProvider>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <MockFeatureProvider>
                  <MockOrgBrandingProvider>
                    <Suspense fallback={<div>Loading...</div>}>
                      <ImportedComponent {...props} />
                    </Suspense>
                  </MockOrgBrandingProvider>
                </MockFeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </MockTRPCProvider>
        </I18nextProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}