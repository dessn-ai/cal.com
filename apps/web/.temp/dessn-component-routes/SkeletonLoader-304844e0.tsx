import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/components/SkeletonLoaderEventWorkflowsTab';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}