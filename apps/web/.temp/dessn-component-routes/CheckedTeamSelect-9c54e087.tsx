import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/CheckedTeamSelect';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      priority: 2,
      weight: 100
    }
  });

  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: JSON.stringify([
        {
          avatar: "https://example.com/avatar1.jpg",
          label: "Team Member 1",
          value: "member1",
          priority: 2,
          weight: 100
        },
        {
          avatar: "https://example.com/avatar2.jpg",
          label: "Team Member 2",
          value: "member2",
          priority: 3,
          weight: 80
        }
      ]),
      label: "Selected Team Members"
    },
    isRRWeightsEnabled: {
      type: "boolean",
      value: true,
      label: "Enable RR Weights"
    }
  });

  const options = [
    { avatar: "https://example.com/avatar1.jpg", label: "Team Member 1", value: "member1" },
    { avatar: "https://example.com/avatar2.jpg", label: "Team Member 2", value: "member2" },
    { avatar: "https://example.com/avatar3.jpg", label: "Team Member 3", value: "member3" }
  ];

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        options={options}
        value={JSON.parse(state.value.value)}
        onChange={(newValue) => setState('value', JSON.stringify(newValue))}
        isRRWeightsEnabled={state.isRRWeightsEnabled.value}
      />
    </FormProvider>
  );
}