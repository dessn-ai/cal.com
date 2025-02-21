import React from 'react';
import { useParentState } from '../useIframeState';
import { EventLimitsTab } from '../../../../packages/features/eventtypes/components/tabs/limits/EventLimitsTab';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {},
      label: "Event Type",
    },
    customClassNames: {
      type: "object",
      value: {},
      label: "Custom Class Names",
    },
  });

  const formMethods = useForm<any>({
    defaultValues: {
      beforeEventBuffer: 0,
      afterEventBuffer: 0,
      minimumBookingNotice: 0,
      slotInterval: null,
      bookingLimits: {},
      onlyShowFirstAvailableSlot: false,
      durationLimits: {},
      periodType: "UNLIMITED",
      periodDays: 30,
      periodCountCalendarDays: false,
      offsetStart: 0,
    },
  });

  return (
    <FormProvider {...formMethods}>
      <EventLimitsTab 
        eventType={state.eventType.value} 
        customClassNames={state.customClassNames.value}
      />
    </FormProvider>
  );
}