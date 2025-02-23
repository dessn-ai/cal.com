import React from 'react';
import { useParentState } from '../useIframeState';
import { LockedIndicator } from '../../../../packages/features/ee/managed-event-types/hooks/useLockedFieldsManager';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isChildrenManagedEventType: {
      type: "boolean",
      value: true,
      label: "Is Children Managed Event Type",
    },
    isManagedEventType: {
      type: "boolean",
      value: false,
      label: "Is Managed Event Type",
    },
    fieldName: {
      type: "string",
      value: "exampleField",
      label: "Field Name",
    },
  });

  const mockFieldState = {
    [state.fieldName.value]: true,
  };

  const mockSetFieldState = () => {};
  const mockT = (key: string) => key;
  const mockSetUnlockedFields = () => {};

  return (
    <LockedIndicator
      isChildrenManagedEventType={state.isChildrenManagedEventType.value}
      isManagedEventType={state.isManagedEventType.value}
      fieldState={[mockFieldState, mockSetFieldState]}
      t={mockT}
      fieldName={state.fieldName.value}
      setUnlockedFields={mockSetUnlockedFields}
    />
  );
}