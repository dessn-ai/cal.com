import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/platform/oauth-clients/create/page';


export default function ComponentPreview() {
  // Since the ServerPageWrapper component doesn't accept any props,
  // we don't need to use useParentState here.

  return <ImportedComponent />;
}