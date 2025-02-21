import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/403/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since the component doesn't have any props, we don't need to define any state
  });

  // Mock the getTranslate function
  const mockGetTranslate = async () => (key: string) => key;

  // Mock the WEBAPP_URL constant
  const WEBAPP_URL = '/';

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent 
        getTranslate={mockGetTranslate}
        WEBAPP_URL={WEBAPP_URL}
      />
    </React.Suspense>
  );
}