import React from 'react';
import { useParentState } from '../useIframeState';
import { RoutingFormResponsesDownload } from '../../../../packages/features/insights/filters/Download/RoutingFormResponsesDownload';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    sorting: {
      type: "string",
      value: JSON.stringify([{ id: 'name', desc: false }]),
      label: "Sorting",
    },
  });

  const sorting = JSON.parse(state.sorting.value);

  return (
    <InsightsOrgTeamsProvider>
      <RoutingFormResponsesDownload sorting={sorting} />
    </InsightsOrgTeamsProvider>
  );
}