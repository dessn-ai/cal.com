import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { ErrorBoundary } from '../ErrorBoundary';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Mock crypto for browser environment
if (typeof window !== 'undefined' && !window.crypto) {
  window.crypto = {
    getRandomValues: function(buffer) {
      const buf = new Uint8Array(buffer.length);
      for (let i = 0; i < buffer.length; i++) {
        buf[i] = Math.floor(Math.random() * 256);
      }
      return buf;
    },
    randomBytes: function(size) {
      const buf = new Uint8Array(size);
      for (let i = 0; i < size; i++) {
        buf[i] = Math.floor(Math.random() * 256);
      }
      return {
        toString: function(encoding) {
          if (encoding === 'hex') {
            return Array.from(buf)
              .map(b => b.toString(16).padStart(2, '0'))
              .join('');
          }
          return String.fromCharCode.apply(null, buf);
        }
      };
    }
  };
}

// Lazy load the component with error handling
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/workflows/page')
    .catch(err => {
      console.error('Error loading component:', err);
      return { 
        default: () => <div>Error loading workflow page. Please try again later.</div> 
      };
    })
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "test" }),
      label: "Search Params",
    },
  });

  let params;
  let searchParams;
  
  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Error parsing params:', error);
    params = { id: "123" };
    searchParams = { query: "test" };
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider session={null}>
          <I18nextProvider i18n={{} as any}>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider>
                  <ImportedComponent params={params} searchParams={searchParams} />
                </FeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </I18nextProvider>
        </SessionProvider>
      </Suspense>
    </ErrorBoundary>
  );
}