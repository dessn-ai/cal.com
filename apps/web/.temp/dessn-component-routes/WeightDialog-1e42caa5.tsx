import React from 'react';
import { useParentState } from '../useIframeState';
import { WeightDialog } from '../../../../packages/features/eventtypes/components/HostEditDialogs';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
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
    optionWeight: {
      type: "number",
      value: 100,
      label: "Option Weight",
    },
  });

  const option = {
    avatar: state.optionAvatar.value,
    label: state.optionLabel.value,
    value: state.optionValue.value,
    priority: state.optionPriority.value,
    weight: state.optionWeight.value,
  };

  // Create form methods with required initial values
  const methods = useForm({
    defaultValues: {
      hosts: [{
        userId: parseInt(option.value),
        priority: option.priority,
        weight: option.weight,
        isFixed: false
      }],
      isRRWeightsEnabled: true
    }
  });

  return (
    <FormProvider {...methods}>
      <WeightDialog
        isOpenDialog={state.isOpenDialog.value}
        setIsOpenDialog={(value) => setState('isOpenDialog', value)}
        option={option}
        onChange={(value) => console.log('onChange', value)}
      />
    </FormProvider>
  );
}