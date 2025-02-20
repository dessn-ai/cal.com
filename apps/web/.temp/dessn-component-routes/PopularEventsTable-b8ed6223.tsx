import React from 'react';
import { useParentState } from '../useIframeState';
import { PopularEventsTable } from '../../../../packages/features/insights/components/PopularEventsTable';

import { TRPCProvider } from '@calcom/trpc/react';
import { I18nLanguageHandler } from '@calcom/features/i18n';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    startDate: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
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
    memberUserId: {
      type: "number",
      value: 1,
      label: "Member User ID",
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

  return (
    <TRPCProvider>
      <I18nLanguageHandler>
        <PopularEventsTable />
      </I18nLanguageHandler>
    </TRPCProvider>
  );
}