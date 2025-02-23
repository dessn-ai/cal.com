import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilityEditSheetForm } from '../../../../packages/features/timezone-buddy/components/AvailabilityEditSheet';

import { useForm } from 'react-hook-form';

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
    availability: [],
    dateOverrides: [],
    workingHours: [],
    schedule: {},
    isDefault: true,
    hasDefaultSchedule: true,
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