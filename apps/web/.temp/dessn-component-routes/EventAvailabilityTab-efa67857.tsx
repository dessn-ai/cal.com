import React from 'react';
import { useParentState } from '../useIframeState';
import { EventAvailabilityTab } from '../../../../packages/features/eventtypes/components/tabs/availability/EventAvailabilityTab';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isTeamEvent: {
      type: "boolean",
      value: false,
      label: "Is Team Event",
    },
    schedulesQueryData: {
      type: "string",
      value: JSON.stringify([{ id: 1, name: "Default Schedule", isDefault: true }]),
      label: "Schedules Query Data",
    },
    isSchedulesPending: {
      type: "boolean",
      value: false,
      label: "Is Schedules Pending",
    },
    eventType: {
      type: "string",
      value: JSON.stringify({ schedule: 1, scheduleName: "Default Schedule" }),
      label: "Event Type",
    },
    teamMembers: {
      type: "string",
      value: JSON.stringify([{ id: 1, name: "John Doe", avatar: "https://example.com/avatar.jpg" }]),
      label: "Team Members",
    },
    scheduleQueryData: {
      type: "string",
      value: JSON.stringify({ timeZone: "UTC", id: 1, schedule: [] }),
      label: "Schedule Query Data",
    },
    isSchedulePending: {
      type: "boolean",
      value: false,
      label: "Is Schedule Pending",
    },
    user: {
      type: "string",
      value: JSON.stringify({ timeFormat: 12, weekStart: "Monday" }),
      label: "User",
    },
  });

  const methods = useForm({
    defaultValues: {
      schedule: 1,
      hosts: [{ userId: 1, scheduleId: 1 }],
    },
  });

  const mockHostSchedulesQuery = () => ({
    data: { schedules: [{ id: 1, name: "Default Schedule", isDefault: true }] },
    isPending: false,
  });

  return (
    <FormProvider {...methods}>
      <EventAvailabilityTab
        isTeamEvent={state.isTeamEvent.value}
        schedulesQueryData={JSON.parse(state.schedulesQueryData.value)}
        isSchedulesPending={state.isSchedulesPending.value}
        eventType={JSON.parse(state.eventType.value)}
        teamMembers={JSON.parse(state.teamMembers.value)}
        scheduleQueryData={JSON.parse(state.scheduleQueryData.value)}
        isSchedulePending={state.isSchedulePending.value}
        user={JSON.parse(state.user.value)}
        hostSchedulesQuery={mockHostSchedulesQuery}
      />
    </FormProvider>
  );
}