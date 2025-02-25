import React from 'react';
import { useParentState } from '../useIframeState';
import { HintsOrErrors } from '../../../../packages/ui/components/form/inputs/HintOrErrors';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hintErrors: {
      type: "string",
      value: "password,uppercase,lowercase,number,min",
      label: "Hint Errors (comma-separated)",
    },
    fieldName: {
      type: "string",
      value: "password",
      label: "Field Name",
    },
  });

  const methods = useForm();

  const t = (key: string) => {
    const translations: Record<string, string> = {
      'password_hint_password': 'Must contain at least 8 characters',
      'password_hint_uppercase': 'Must contain at least 1 uppercase letter',
      'password_hint_lowercase': 'Must contain at least 1 lowercase letter',
      'password_hint_number': 'Must contain at least 1 number',
      'password_hint_min': 'Must be at least 8 characters long',
    };
    return translations[key] || key;
  };

  return (
    <FormProvider {...methods}>
      <HintsOrErrors
        hintErrors={state.hintErrors.value.split(',')}
        fieldName={state.fieldName.value}
        t={t}
      />
    </FormProvider>
  );
}