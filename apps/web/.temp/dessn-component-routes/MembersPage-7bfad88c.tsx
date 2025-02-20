import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/members/members-view';


export default function ComponentPreview() {
  // Since the component doesn't have any props, we don't need to use useParentState
  // However, we'll keep it here in case we need to add props in the future
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}