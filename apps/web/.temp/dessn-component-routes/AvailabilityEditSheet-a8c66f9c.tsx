import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilityEditSheet } from '../../../../packages/features/timezone-buddy/components/AvailabilityEditSheet';

import { FormProvider, useForm } from 'react-hook-form';

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

  const methods = useForm();

  const mockSelectedUser = {
    id: 1,
    username: "JohnDoe",
    name: "John Doe",
    organizationId: 1,
    avatarUrl: null,
    email: "john@example.com",
    timeZone: "America/New_York",
    role: "MEMBER",
    defaultScheduleId: null,
    dateRanges: [],
    profile: {
      id: 1,
      upId: "123",
      username: "JohnDoe",
      organizationId: null,
      organization: null,
    },
  };

  return (
    <FormProvider {...methods}>
      <AvailabilityEditSheet
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
        selectedUser={state.selectedUser.value === "user1" ? mockSelectedUser : null}
      />
    </FormProvider>
  );
}