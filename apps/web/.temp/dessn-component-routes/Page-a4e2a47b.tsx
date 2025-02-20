import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/teams/[id]/settings/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have any props, we don't need to define any state
  });

  // Mock the getTranslate function
  const mockGetTranslate = () => (key: string) => key;

  // Mock the generateMetadata function
  const mockGenerateMetadata = async () => ({
    title: 'Settings',
    description: 'Team settings description'
  });

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent 
        getTranslate={mockGetTranslate}
        generateMetadata={mockGenerateMetadata}
      />
    </React.Suspense>
  );
}