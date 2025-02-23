import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/insights/insights-virtual-queues-view';

import { trpc } from "@calcom/trpc";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  // Mock trpc.viewer.insights.getUserRelevantTeamRoutingForms.useQuery
  trpc.viewer.insights.getUserRelevantTeamRoutingForms.useQuery = () => ({
    data: [
      { id: '1', name: 'Form 1' },
      { id: '2', name: 'Form 2' },
    ],
    isLoading: false,
  });

  return <ImportedComponent />;
}