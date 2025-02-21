import React from 'react';
import { useParentState } from '../useIframeState';
import { RoutedToPerPeriod } from '../../../../packages/features/insights/components/RoutedToPerPeriod';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    userId: {
      type: "number",
      value: 1,
      label: "User ID",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    startDate: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "End Date",
    },
    isAll: {
      type: "boolean",
      value: false,
      label: "Is All",
    },
    routingFormId: {
      type: "string",
      value: "form-123",
      label: "Routing Form ID",
    },
  });

  const methods = useForm();

  return (
    <RoutedToPerPeriod />
  );
}