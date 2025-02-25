import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/components/BrandColorsForm';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    brandColor: {
      type: "string",
      value: "#000000",
      label: "Brand Color",
    },
    darkBrandColor: {
      type: "string",
      value: "#FFFFFF",
      label: "Dark Brand Color",
    },
  });

  const methods = useForm({
    defaultValues: {
      brandColor: state.brandColor.value,
      darkBrandColor: state.darkBrandColor.value,
    },
  });

  const onSubmit = (values: { brandColor: string; darkBrandColor: string }) => {
    console.log('Form submitted:', values);
    setState('brandColor', values.brandColor);
    setState('darkBrandColor', values.darkBrandColor);
  };

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        onSubmit={onSubmit}
        brandColor={state.brandColor.value}
        darkBrandColor={state.darkBrandColor.value}
      />
    </FormProvider>
  );
}