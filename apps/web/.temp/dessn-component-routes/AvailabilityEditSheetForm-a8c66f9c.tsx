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
    selectedUser: {
      type: "dropdown",
      value: "user1",
      options: ["user1", "user2", "user3"],
      label: "Selected User",
    },
  });

  const mockUser = {
    id: 1,
    username: "johndoe",
    name: "John Doe",
    organizationId: 1,
    avatarUrl: "https://example.com/avatar.jpg",
    email: "john@example.com",
    timeZone: "America/New_York",
    role: "MEMBER",
    defaultScheduleId: null,
    dateRanges: [],
    profile: {
      id: 1,
      upId: "123",
      username: "johndoe",
      organizationId: null,
      organization: null,
    },
  };

  const mockData = {
    id: 1,
    name: "Default Schedule",
    availability: [[]],
    dateOverrides: [],
    timeZone: "America/New_York",
    workingHours: [],
    isDefault: true,
    hasDefaultSchedule: true,
    isManaged: false,
    schedule: [],
    isLastSchedule: false,
    readOnly: false,
  };

  const form = useForm();

  return (
    <AvailabilityEditSheetForm
      open={state.open.value}
      onOpenChange={(open) => setState('open', open)}
      selectedUser={state.selectedUser.value === "user1" ? mockUser : null}
      data={mockData}
      isPending={false}
    />
  );
}