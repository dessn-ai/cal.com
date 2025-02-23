import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/insights/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return <ImportedComponent />;
}