import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/developer/webhooks/new/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since the component doesn't have any props, we don't need to define any state
  });

  return <ImportedComponent />;
}