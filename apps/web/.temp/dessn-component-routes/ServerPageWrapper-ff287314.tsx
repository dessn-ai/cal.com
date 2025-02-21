import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/more/page';


export default function ComponentPreview() {
  // Since ServerPageWrapper doesn't have any props, we don't need to use useParentState
  // However, we'll keep it here in case props are added in the future
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}