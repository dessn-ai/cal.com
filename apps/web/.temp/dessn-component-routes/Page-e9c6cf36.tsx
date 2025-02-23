import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(admin-layout)/admin/oAuth/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have any props, we don't need to define any state
  });

  // Mock the getTranslate function
  const mockGetTranslate = async () => (key: string) => key;

  // Wrap the component in a React.Suspense to handle the async nature of the component
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent getTranslate={mockGetTranslate} />
    </React.Suspense>
  );
}