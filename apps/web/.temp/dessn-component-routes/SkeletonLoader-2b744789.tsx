import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/components/SkeletonLoaderEdit';


export default function ComponentPreview() {
  // Since SkeletonLoader doesn't have any props, we don't need to use useParentState
  // But we'll keep it here for consistency and potential future use
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}