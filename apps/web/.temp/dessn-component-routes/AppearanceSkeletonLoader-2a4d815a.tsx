import React from 'react';
import { useParentState } from '../useIframeState';
import { AppearanceSkeletonLoader } from '../../../../packages/features/ee/components/CommonSkeletonLoaders';


export default function ComponentPreview() {
  // Since AppearanceSkeletonLoader doesn't accept any props, we don't need to use useParentState
  return <AppearanceSkeletonLoader />;
}