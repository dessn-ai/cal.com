import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/components/SkeletonLoaderList';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since SkeletonLoader doesn't have any props, we don't need to define any state
  });

  return <ImportedComponent />;
}