import React from 'react';
import { useParentState } from '../useIframeState';
import { LoadingInsight } from '../../../../packages/features/insights/components/LoadingInsights';


export default function ComponentPreview() {
  // Since LoadingInsight doesn't have any props, we don't need to use useParentState
  // But we'll keep it here in case we need to add props in the future
  const [state, setState] = useParentState({});

  return <LoadingInsight />;
}