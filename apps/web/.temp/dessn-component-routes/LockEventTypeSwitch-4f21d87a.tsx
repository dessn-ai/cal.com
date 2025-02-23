import React from 'react';
import { useParentState } from '../useIframeState';
import { LockEventTypeSwitch } from '../../../../packages/features/ee/organizations/pages/components/LockEventTypeSwitch';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAdminOrOwner: {
      type: "boolean",
      value: true,
      label: "Is Admin or Owner",
    },
  });

  const currentOrg = {
    organizationSettings: {
      lockEventTypeCreationForUsers: false,
    },
  };

  const formMethods = useForm();

  return (
    <LockEventTypeSwitch
      currentOrg={currentOrg}
      isAdminOrOwner={state.isAdminOrOwner.value}
    />
  );
}