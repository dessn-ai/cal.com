import React from 'react';
import { useParentState } from '../useIframeState';
import { LockedSwitch } from '../../../../packages/features/ee/managed-event-types/hooks/useLockedFieldsManager';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isManagedEventType: {
      type: "boolean",
      value: true,
      label: "Is Managed Event Type",
    },
    fieldName: {
      type: "string",
      value: "exampleField",
      label: "Field Name",
    },
  });

  const [fieldState, setFieldState] = React.useState<Record<string, boolean>>({});

  const setUnlockedFields = (fieldName: string, val: boolean | undefined) => {
    console.log(`Setting ${fieldName} to ${val}`);
  };

  return (
    <LockedSwitch
      isManagedEventType={state.isManagedEventType.value}
      fieldState={[fieldState, setFieldState]}
      fieldName={state.fieldName.value}
      setUnlockedFields={setUnlockedFields}
    />
  );
}