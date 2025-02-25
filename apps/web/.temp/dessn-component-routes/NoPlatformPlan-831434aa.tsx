import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/settings/platform/dashboard/NoPlatformPlan';


export default function ComponentPreview() {
  // This component doesn't have any props, so we don't need to use useParentState
  return <ImportedComponent />;
}