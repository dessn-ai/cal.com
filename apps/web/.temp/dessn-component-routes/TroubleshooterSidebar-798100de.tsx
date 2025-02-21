import React from 'react';
import { useParentState } from '../useIframeState';
import { TroubleshooterSidebar } from '../../../../packages/features/troubleshooter/components/TroubleshooterSidebar';


export default function ComponentPreview() {
  // Since TroubleshooterSidebar doesn't accept any props, we don't need to use useParentState
  return <TroubleshooterSidebar />;
}