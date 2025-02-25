import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/organizations/[id]/onboard-members-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component, so we're not setting any state
  });

  return (
    <ImportedComponent />
  );
}