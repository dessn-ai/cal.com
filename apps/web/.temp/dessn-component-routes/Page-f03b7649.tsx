import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
  fallbackLng: 'en',
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create an error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

const LazyComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/my-account/calendars/page'));

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Mock the necessary functions and components
  React.useEffect(() => {
    try {
      // Mock the necessary imports and global functions
      (global as any).getTranslate = async () => (key: string) => key;
      (global as any).Button = ({ children }: { children: React.ReactNode }) => <button>{children}</button>;
      (global as any).CalendarListContainer = () => <div>Calendar List Container</div>;
      (global as any).SettingsHeader = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
    } catch (error) {
      console.error('Error setting up mocks:', error);
    }
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <div className="w-full">
              <LazyComponent />
            </div>
          </I18nextProvider>
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}