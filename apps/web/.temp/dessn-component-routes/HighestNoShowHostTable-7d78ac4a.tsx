import React from 'react';
import { useParentState } from '../useIframeState';
import { HighestNoShowHostTable } from '../../../../packages/features/insights/components/HighestNoShowHostTable';

import { InsightsProvider } from '../../../../packages/features/insights/context/insights-provider';
import { trpc } from '@calcom/trpc';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    startDate: {
      type: "string",
      value: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "End Date",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    isAll: {
      type: "boolean",
      value: false,
      label: "Is All",
    },
  });

  const queryClient = trpc.useContext();

  return (
    <InsightsProvider
      teamId={state.teamId.value}
      startDate={state.startDate.value}
      endDate={state.endDate.value}
      eventTypeId={state.eventTypeId.value}
      isAll={state.isAll.value}
    >
      <HighestNoShowHostTable />
    </InsightsProvider>
  );
}