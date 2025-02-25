import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/components/WebhookListItemSkeleton';


export default function ComponentPreview() {
  // This component doesn't have any props, so we don't need to use useParentState
  return <ImportedComponent />;
}