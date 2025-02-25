import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/availability/components/SkeletonLoader';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // The SkeletonLoader component doesn't seem to accept any props,
    // so we don't need to define any state here.
  });

  return <ImportedComponent />;
}