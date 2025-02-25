import React from 'react';
import { useParentState } from '../useIframeState';
import { KPICard } from '../../../../packages/features/insights/components/KPICard';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Total Bookings",
      label: "Title",
    },
    value: {
      type: "number",
      value: 1000,
      label: "Value",
    },
    previousCount: {
      type: "number",
      value: 900,
      label: "Previous Count",
    },
    deltaPrevious: {
      type: "number",
      value: 11.11,
      label: "Delta Previous (%)",
    },
    startDate: {
      type: "string",
      value: "2023-01-01",
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: "2023-01-31",
      label: "End Date",
    },
  });

  return (
    <KPICard
      title={state.title.value}
      value={state.value.value}
      previousMetricData={{
        count: state.previousCount.value,
        deltaPrevious: state.deltaPrevious.value,
      }}
      previousDateRange={{
        startDate: state.startDate.value,
        endDate: state.endDate.value,
      }}
    />
  );
}