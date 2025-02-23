import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/auth/oauth2/authorize/page';


export default function ComponentPreview() {
  // Since the ServerPageWrapper component doesn't have any props, we don't need to use useParentState
  // However, we'll keep it here in case we want to add any configurable options in the future
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}