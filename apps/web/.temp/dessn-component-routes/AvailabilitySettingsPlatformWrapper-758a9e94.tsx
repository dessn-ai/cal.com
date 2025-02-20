import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilitySettingsPlatformWrapper } from '../../../../packages/platform/atoms/availability/wrappers/AvailabilitySettingsPlatformWrapper';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "schedule-1",
      label: "Schedule ID",
    },
    disableEditableHeading: {
      type: "boolean",
      value: false,
      label: "Disable Editable Heading",
    },
    enableOverrides: {
      type: "boolean",
      value: true,
      label: "Enable Overrides",
    },
    allowDelete: {
      type: "boolean",
      value: true,
      label: "Allow Delete",
    },
    allowSetToDefault: {
      type: "boolean",
      value: true,
      label: "Allow Set to Default",
    },
    disableToasts: {
      type: "boolean",
      value: false,
      label: "Disable Toasts",
    },
  });

  const handleUpdateSuccess = (res) => {
    console.log("Update success:", res);
  };

  const handleUpdateError = (err) => {
    console.error("Update error:", err);
  };

  const handleDeleteSuccess = (res) => {
    console.log("Delete success:", res);
  };

  const handleDeleteError = (err) => {
    console.error("Delete error:", err);
  };

  const handleBeforeUpdate = (updateBody) => {
    console.log("Before update:", updateBody);
    return true;
  };

  return (
    <AvailabilitySettingsPlatformWrapper
      id={state.id.value}
      disableEditableHeading={state.disableEditableHeading.value}
      enableOverrides={state.enableOverrides.value}
      allowDelete={state.allowDelete.value}
      allowSetToDefault={state.allowSetToDefault.value}
      disableToasts={state.disableToasts.value}
      onUpdateSuccess={handleUpdateSuccess}
      onUpdateError={handleUpdateError}
      onDeleteSuccess={handleDeleteSuccess}
      onDeleteError={handleDeleteError}
      onBeforeUpdate={handleBeforeUpdate}
      customClassNames={{
        containerClassName: "custom-container",
        ctaClassName: "custom-cta",
        formClassName: "custom-form",
      }}
    />
  );
}