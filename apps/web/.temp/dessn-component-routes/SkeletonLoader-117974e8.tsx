import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/SkeletonLoaderAvailabilityTimes';


export default function ComponentPreview() {
  // Since the SkeletonLoader component doesn't accept any props, we don't need to use useParentState

  return <ImportedComponent />;
}