import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/privacy/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have any props, we don't need to define any state
  });

  // Mock the getTranslate function
  const mockGetTranslate = async () => (key: string) => key;

  // Wrap the component in a suspense boundary as it's an async component
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent />
    </React.Suspense>
  );
}