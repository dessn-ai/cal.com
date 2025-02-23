import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilityEditSheetForm } from '../../../../packages/features/timezone-buddy/components/AvailabilityEditSheet';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
    selectedUserId: {
      type: "number",
      value: 1,
      label: "Selected User ID",
    },
    selectedUserUsername: {
      type: "string",
      value: "JohnDoe",
      label: "Selected User Username",
    },
  });

  const mockData = {
    id: 1,
    name: "Default Schedule",
    timeZone: "America/New_York",
    availability: [
      [], // Sunday
      [{ start: new Date("2024-01-01T09:00:00"), end: new Date("2024-01-01T17:00:00") }], // Monday
      [{ start: new Date("2024-01-01T09:00:00"), end: new Date("2024-01-01T17:00:00") }], // Tuesday
      [{ start: new Date("2024-01-01T09:00:00"), end: new Date("2024-01-01T17:00:00") }], // Wednesday
      [{ start: new Date("2024-01-01T09:00:00"), end: new Date("2024-01-01T17:00:00") }], // Thursday
      [{ start: new Date("2024-01-01T09:00:00"), end: new Date("2024-01-01T17:00:00") }], // Friday
      [], // Saturday
    ],
    dateOverrides: [],
    workingHours: [
      {
        days: [1, 2, 3, 4, 5], // Monday to Friday
        startTime: "09:00:00",
        endTime: "17:00:00",
      }
    ],
    hasDefaultSchedule: true,
    isDefault: true,
    isManaged: false,
    readOnly: false,
    isLastSchedule: false,
  };

  const mockSelectedUser = {
    id: state.selectedUserId.value,
    username: state.selectedUserUsername.value,
    name: "John Doe",
    organizationId: 1,
    avatarUrl: null,
    email: "john@example.com",
    timeZone: "America/New_York",
    role: "MEMBER",
    defaultScheduleId: 1,
    dateRanges: [],
    profile: {
      id: state.selectedUserId.value,
      upId: "123",
      username: state.selectedUserUsername.value,
      organizationId: null,
      organization: null,
    },
  };

  return (
    <AvailabilityEditSheetForm
      open={state.open.value}
      onOpenChange={(open) => setState("open", open)}
      selectedUser={mockSelectedUser}
      data={mockData}
      isPending={false}
    />
  );
}