import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilityEditSheetForm } from '../../../../packages/features/timezone-buddy/components/AvailabilityEditSheet';
import { useForm, FormProvider } from 'react-hook-form';

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
    schedule: {
      id: 1,
      userId: 1,
      name: "Default Schedule",
      timeZone: "America/New_York",
      availability: [
        {
          start: new Date('2024-01-01T09:00:00'),
          end: new Date('2024-01-01T17:00:00'),
        }
      ]
    },
    availability: [
      [], // Sunday
      [{ // Monday
        start: new Date('2024-01-01T09:00:00'),
        end: new Date('2024-01-01T17:00:00'),
      }],
      [{ // Tuesday
        start: new Date('2024-01-01T09:00:00'),
        end: new Date('2024-01-01T17:00:00'),
      }],
      [{ // Wednesday
        start: new Date('2024-01-01T09:00:00'),
        end: new Date('2024-01-01T17:00:00'),
      }],
      [{ // Thursday
        start: new Date('2024-01-01T09:00:00'),
        end: new Date('2024-01-01T17:00:00'),
      }],
      [{ // Friday
        start: new Date('2024-01-01T09:00:00'),
        end: new Date('2024-01-01T17:00:00'),
      }],
      [], // Saturday
    ],
    timeZone: "America/New_York",
    workingHours: [
      {
        days: [1, 2, 3, 4, 5], // Monday to Friday
        startTime: new Date('2024-01-01T09:00:00'),
        endTime: new Date('2024-01-01T17:00:00'),
      }
    ],
    dateOverrides: [],
    isDefault: true,
    hasDefaultSchedule: true,
    isManaged: false,
    isLastSchedule: false,
    readOnly: false,
  };

  const methods = useForm({
    defaultValues: {
      schedule: mockData.schedule,
      availability: mockData.availability,
    }
  });

  return (
    <FormProvider {...methods}>
      <AvailabilityEditSheetForm
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
        selectedUser={state.selectedUser.value === "user1" ? mockUser : null}
        data={mockData}
        isPending={false}
      />
    </FormProvider>
  );
}