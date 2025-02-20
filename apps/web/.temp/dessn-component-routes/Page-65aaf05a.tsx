import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import i18next from 'i18next';

// Use dynamic import with no SSR
const DynamicComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/(settings-layout)/teams/page'),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

// Simple mock providers
const FeatureProvider = ({ children }) => children;
const TRPCProvider = ({ children }) => children;

export default function ComponentPreview() {
  const [state] = useParentState({});

  // Basic QueryClient
  const queryClient = new QueryClient();

  // Basic i18n instance
  const i18n = i18next.createInstance();
  i18n.init({
    lng: 'en',
    resources: { en: { translation: {} } }
  });

  // Basic mock session
  const mockSession = {
    user: { id: 1, name: 'Test User', email: 'test@example.com' },
    expires: '2024-12-31'
  };

  const mockGetTranslate = async () => (key: string) => key;

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider session={mockSession}>
          <I18nextProvider i18n={i18n}>
            <TRPCProvider>
              <QueryClientProvider client={queryClient}>
                <FeatureProvider>
                  <TooltipProvider>
                    <DynamicComponent getTranslate={mockGetTranslate} />
                  </TooltipProvider>
                </FeatureProvider>
              </QueryClientProvider>
            </TRPCProvider>
          </I18nextProvider>
        </SessionProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

// Basic ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Preview error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}