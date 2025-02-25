import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterSearchField } from '../../../../packages/ui/components/form/inputs/Input';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    placeholder: {
      type: "string",
      value: "Search...",
      label: "Placeholder",
    },
    containerClassName: {
      type: "string",
      value: "mx-3 mt-2",
      label: "Container Class Name",
    },
  });

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <FilterSearchField 
        placeholder={state.placeholder.value}
        containerClassName={state.containerClassName.value}
      />
    </FormProvider>
  );
}