import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/api-keys/components/ApiKeyDialogForm';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    defaultValues: {
      type: 'dropdown',
      value: 'with_defaults',
      options: ['with_defaults', 'without_defaults'],
      label: 'Default Values',
    },
  });

  const form = useForm();

  const defaultValues = state.defaultValues.value === 'with_defaults' 
    ? {
        note: 'Sample API Key',
        neverExpires: false,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      }
    : undefined;

  return (
    <ImportedComponent
      defaultValues={defaultValues}
      handleClose={() => console.log('Dialog closed')}
    />
  );
}