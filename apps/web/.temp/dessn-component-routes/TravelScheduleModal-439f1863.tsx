import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/settings/TravelScheduleModal';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
    existingSchedules: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          timeZone: "America/New_York"
        }
      ]),
      label: "Existing Schedules",
    },
  });

  const { setValue } = useForm({
    defaultValues: {
      locale: { value: "en", label: "English" },
      timeZone: "America/New_York",
      timeFormat: { value: 12, label: "12" },
      weekStart: { value: "Monday", label: "Monday" },
      travelSchedules: JSON.parse(state.existingSchedules.value),
    }
  });

  return (
    <ImportedComponent
      open={state.open.value}
      onOpenChange={() => setState('open', !state.open.value)}
      setValue={setValue}
      existingSchedules={JSON.parse(state.existingSchedules.value)}
    />
  );
}