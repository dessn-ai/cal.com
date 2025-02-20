import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventAvailabilityTabWebWrapper';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isTeamEvent: {
      type: "boolean",
      value: false,
      label: "Is Team Event",
    },
  });

  const methods = useForm({
    defaultValues: {
      schedule: "default-schedule-id",
    },
  });

  const mockEventType: any = {
    id: 1,
    title: "Sample Event",
    length: 60,
    hidden: false,
    requiresConfirmation: false,
    disableGuests: false,
    hideCalendarNotes: false,
    minimumBookingNotice: 120,
    slotInterval: 30,
    metadata: {},
  };

  const mockUser: any = {
    id: 1,
    username: "johndoe",
    name: "John Doe",
    email: "john@example.com",
    defaultScheduleId: "default-schedule-id",
  };

  const mockTeamMembers: any[] = [];

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        eventType={mockEventType}
        isTeamEvent={state.isTeamEvent.value}
        user={mockUser}
        teamMembers={mockTeamMembers}
      />
    </FormProvider>
  );
}