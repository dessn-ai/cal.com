import React from 'react';
import { useParentState } from '../useIframeState';
import { PriorityDialog } from '../../../../packages/features/eventtypes/components/HostEditDialogs';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const methods = useForm();
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Dialog Open",
    },
    optionAvatar: {
      type: "string",
      value: "https://example.com/avatar.jpg",
      label: "Option Avatar",
    },
    optionLabel: {
      type: "string",
      value: "John Doe",
      label: "Option Label",
    },
    optionValue: {
      type: "string",
      value: "1",
      label: "Option Value",
    },
    optionPriority: {
      type: "number",
      value: 2,
      label: "Option Priority",
    },
    customClassNamesSelect: {
      type: "string",
      value: "custom-select",
      label: "Custom Select Class",
    },
    customClassNamesLabel: {
      type: "string",
      value: "custom-label",
      label: "Custom Label Class",
    },
    customClassNamesConfirmButton: {
      type: "string",
      value: "custom-confirm-button",
      label: "Custom Confirm Button Class",
    },
  });

  const option = {
    avatar: state.optionAvatar.value,
    label: state.optionLabel.value,
    value: state.optionValue.value,
    priority: state.optionPriority.value,
  };

  const customClassNames = {
    select: state.customClassNamesSelect.value,
    label: state.customClassNamesLabel.value,
    confirmButton: state.customClassNamesConfirmButton.value,
  };

  return (
    <FormProvider {...methods}>
      <PriorityDialog
        isOpenDialog={state.isOpenDialog.value}
        setIsOpenDialog={(value) => setState('isOpenDialog', value)}
        option={option}
        onChange={(value) => console.log('onChange', value)}
        customClassNames={customClassNames}
      />
    </FormProvider>
  );
}