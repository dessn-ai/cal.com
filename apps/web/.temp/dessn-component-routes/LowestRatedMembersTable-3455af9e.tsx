import React from 'react';
import { useParentState } from '../useIframeState';
import { LowestRatedMembersTable } from '../../../../packages/features/insights/components/LowestRatedMembersTable';

// Mock i18n wrapper component
const I18nWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock TRPC Provider
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

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
    <MockTRPCProvider>
      <I18nWrapper>
        <LowestRatedMembersTable />
      </I18nWrapper>
    </MockTRPCProvider>
  );
}