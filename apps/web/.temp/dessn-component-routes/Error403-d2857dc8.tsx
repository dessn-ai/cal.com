import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  fallbackLng: 'en',
  resources: {},
  interpolation: {
    escapeValue: false,
  },
});

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error('Error in 403 page:', error);
    return <div>Something went wrong loading the 403 page.</div>;
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Mock the getTranslate function
  const mockGetTranslate = async () => (key: string) => key;

  // Mock the WEBAPP_URL constant
  const WEBAPP_URL = '/';

  const ImportedComponent = React.lazy(() => 
    import('../../app/(use-page-wrapper)/403/page')
      .catch(err => {
        console.error('Failed to load 403 page:', err);
        return { 
          default: () => (
            <div>Error 403: Forbidden Access</div>
          )
        };
      })
  );

  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div>Loading...</div>}>
          <ImportedComponent 
            getTranslate={mockGetTranslate}
            WEBAPP_URL={WEBAPP_URL}
          />
        </Suspense>
      </I18nextProvider>
    </ErrorBoundary>
  );
}