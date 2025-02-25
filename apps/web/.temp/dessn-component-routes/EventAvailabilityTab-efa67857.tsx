import React from 'react';
import { useParentState } from '../useIframeState';
import { EventAvailabilityTab } from '../../../../packages/features/eventtypes/components/tabs/availability/EventAvailabilityTab';
import { FormProvider, useForm } from 'react-hook-form';

// Mock LockedFieldsProvider context
const LockedFieldsContext = React.createContext({
  lockedFields: new Set(),
  setLockedFields: () => {},
});

const LockedFieldsProvider = ({ children }) => {
  const [lockedFields, setLockedFields] = React.useState(new Set());
  
  return (
    <LockedFieldsContext.Provider value={{ lockedFields, setLockedFields }}>
      {children}
    </LockedFieldsContext.Provider>
  );
};

export default function ComponentPreview() {
  const formMethods = useForm({
    defaultValues: {
      schedule: [],
      availability: [],
      timeZone: "UTC",
      seatsPerTimeSlot: 1,
      requiresConfirmation: false,
      metadata: {},
    }
  });

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
      value: JSON.stringify({ 
        schedule: 1, 
        scheduleName: "Default Schedule",
        metadata: {},
        seatsPerTimeSlot: 1,
        requiresConfirmation: false,
      }),
      label: "Event Type",
    },
    teamMembers: {
      type: "string",
      value: JSON.stringify([{ id: 1, name: "John Doe", avatar: "" }]),
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
    editAvailabilityRedirectUrl: {
      type: "string",
      value: "/edit-availability",
      label: "Edit Availability Redirect URL",
    },
  });

  const mockHostSchedulesQuery = () => ({
    data: { schedules: [] },
    isPending: false,
  });

  return (
    <LockedFieldsProvider>
      <FormProvider {...formMethods}>
        <EventAvailabilityTab
          isTeamEvent={state.isTeamEvent.value}
          schedulesQueryData={JSON.parse(state.schedulesQueryData.value)}
          isSchedulesPending={state.isSchedulesPending.value}
          eventType={JSON.parse(state.eventType.value)}
          teamMembers={JSON.parse(state.teamMembers.value)}
          scheduleQueryData={JSON.parse(state.scheduleQueryData.value)}
          isSchedulePending={state.isSchedulePending.value}
          user={JSON.parse(state.user.value)}
          editAvailabilityRedirectUrl={state.editAvailabilityRedirectUrl.value}
          hostSchedulesQuery={mockHostSchedulesQuery}
        />
      </FormProvider>
    </LockedFieldsProvider>
  );
}