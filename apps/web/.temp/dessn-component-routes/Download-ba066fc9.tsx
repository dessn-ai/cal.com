import React from 'react';
import { useParentState } from '../useIframeState';
import { Download } from '../../../../packages/features/insights/filters/Download/Download';

import { TRPCProvider } from '@calcom/trpc/react';
import { InsightsProvider } from '../../../../packages/features/insights/context/insights-provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    startDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
      label: "End Date",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    userId: {
      type: "number",
      value: 1,
      label: "User ID",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    memberUserId: {
      type: "number",
      value: 1,
      label: "Member User ID",
    },
  });

  return (
    <TRPCProvider>
      <InsightsProvider
        startDate={new Date(state.startDate.value)}
        endDate={new Date(state.endDate.value)}
        teamId={state.teamId.value}
        userId={state.userId.value}
        eventTypeId={state.eventTypeId.value}
        memberUserId={state.memberUserId.value}>
        <Download />
      </InsightsProvider>
    </TRPCProvider>
  );
}