import React from 'react';
import { useParentState } from '../useIframeState';
import { UserForm } from '../../../../packages/features/ee/users/components/UserForm';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    defaultValues: {
      type: 'object',
      value: {
        avatarUrl: 'https://example.com/avatar.jpg',
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        bio: 'A short bio',
        locale: 'en',
        timeFormat: 12,
        timeZone: 'America/New_York',
        weekStart: 'Monday',
        role: 'USER',
        identityProvider: 'CAL'
      },
      label: 'Default Values'
    },
    localeProp: {
      type: 'string',
      value: 'en',
      label: 'Locale'
    },
    submitLabel: {
      type: 'string',
      value: 'Save',
      label: 'Submit Button Label'
    }
  });

  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };

  const form = useForm();

  return (
    <UserForm
      defaultValues={state.defaultValues.value}
      localeProp={state.localeProp.value}
      onSubmit={onSubmit}
      submitLabel={state.submitLabel.value}
    />
  );
}