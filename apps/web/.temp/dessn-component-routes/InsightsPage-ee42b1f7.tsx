import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/insights/insights-view';

import { DataTableProvider } from "@calcom/features/data-table";
import { InsightsOrgTeamsProvider } from "@calcom/features/insights/context/InsightsOrgTeamsProvider";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return (
    <DataTableProvider>
      <InsightsOrgTeamsProvider>
        <ImportedComponent />
      </InsightsOrgTeamsProvider>
    </DataTableProvider>
  );
}