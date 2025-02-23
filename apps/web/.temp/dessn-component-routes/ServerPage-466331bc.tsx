import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Define proper types for the params
interface PageParams {
  uid: string;
}

interface SearchParams {
  query?: string;
}

interface PreviewState {
  params: {
    type: string;
    value: string;
    label: string;
  };
  searchParams: {
    type: string;
    value: string;
    label: string;
  };
}

export default function ComponentPreview() {
  const [state, setState] = useParentState<PreviewState>({
    params: {
      type: "string",
      value: JSON.stringify({ uid: "example-uid" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example-query" }),
      label: "Search Params",
    },
  });

  // Safely parse the JSON with error handling
  const getParams = (): PageParams => {
    try {
      return JSON.parse(state.params.value);
    } catch (e) {
      console.error('Failed to parse params:', e);
      return { uid: 'default-uid' };
    }
  };

  const getSearchParams = (): SearchParams => {
    try {
      return JSON.parse(state.searchParams.value);
    } catch (e) {
      console.error('Failed to parse searchParams:', e);
      return {};
    }
  };

  const params = getParams();
  const searchParams = getSearchParams();

  return (
    <Suspense fallback={<div>Loading payment page...</div>}>
      <div className="preview-container">
        {/* Using dynamic import to handle the server component */}
        {React.lazy(() => import('../../app/(use-page-wrapper)/payment/[uid]/page')
          .then((mod) => ({
            default: (props: any) => {
              try {
                return React.createElement(mod.default, props);
              } catch (error) {
                console.error('Error rendering payment page:', error);
                return (
                  <div className="error-container">
                    <h3>Error Loading Payment Page</h3>
                    <p>There was an error loading the payment page component.</p>
                  </div>
                );
              }
            },
          }))
          .catch((error) => ({
            default: () => (
              <div className="error-container">
                <h3>Failed to Load Component</h3>
                <p>The payment page component could not be loaded.</p>
              </div>
            ),
          }))
        )}
      </div>
    </Suspense>
  );
}