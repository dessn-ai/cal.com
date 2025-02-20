import React from 'react';
import { useParentState } from '../useIframeState';
import { RoutingKPICards } from '../../../../packages/features/insights/components/RoutingKPICards';

import { TRPCProvider } from '@calcom/trpc/react';
import { InsightsProvider } from '../../../../packages/features/insights/context/insights-provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    startDate: {
      type: "string",
      value: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "End Date",
    },
    userId: {
      type: "number",
      value: 1,
      label: "User ID",
    },
    isAll: {
      type: "boolean",
      value: true,
      label: "Is All",
    },
    routingFormId: {
      type: "number",
      value: 1,
      label: "Routing Form ID",
    },
  });

  return (
    <TRPCProvider>
      <InsightsProvider
        teamId={state.teamId.value}
        startDate={new Date(state.startDate.value)}
        endDate={new Date(state.endDate.value)}
        userId={state.userId.value}
        isAll={state.isAll.value}
        routingFormId={state.routingFormId.value}>
        <RoutingKPICards />
      </InsightsProvider>
    </TRPCProvider>
  );
}