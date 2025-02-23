import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingKPICards } from '../../../../packages/features/insights/components/BookingKPICards';

import { TrpcProvider } from '@calcom/trpc/react';
import { I18nLanguageHandler } from '@calcom/features/i18n';

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
    isAll: {
      type: "boolean",
      value: false,
      label: "Is All",
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
  });

  return (
    <TrpcProvider>
      <I18nLanguageHandler>
        <BookingKPICards />
      </I18nLanguageHandler>
    </TrpcProvider>
  );
}