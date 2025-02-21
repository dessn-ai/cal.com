import React from 'react';
import { useParentState } from '../useIframeState';
import { NoSlotsNotificationSwitch } from '../../../../packages/features/ee/organizations/pages/components/NoSlotsNotificationSwitch';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currentOrg: {
      type: "dropdown",
      value: "organization1",
      options: ["organization1", "organization2", "organization3"],
      label: "Current Organization",
    },
    isAdminOrOwner: {
      type: "boolean",
      value: true,
      label: "Is Admin or Owner",
    },
  });

  const mockCurrentOrg = {
    id: "org1",
    name: state.currentOrg.value,
    slug: state.currentOrg.value.toLowerCase(),
    organizationSettings: {
      adminGetsNoSlotsNotification: true,
    },
  };

  return (
    <NoSlotsNotificationSwitch
      currentOrg={mockCurrentOrg as any}
      isAdminOrOwner={state.isAdminOrOwner.value}
    />
  );
}