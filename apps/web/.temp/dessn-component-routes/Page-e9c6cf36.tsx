import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Use dynamic import instead of direct import
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/oAuth/page'),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have any props, we don't need to define any state
  });

  // Improved mock for getTranslate
  const mockGetTranslate = () => {
    return (key: string) => key;
  };

  try {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mx-auto max-w-4xl p-4">
          <ImportedComponent 
            getTranslate={mockGetTranslate}
          />
        </div>
      </Suspense>
    );
  } catch (error) {
    console.error('Error rendering component:', error);
    return (
      <div className="p-4 text-red-500">
        Error loading component. Please check the console for more details.
      </div>
    );
  }
}