import React from 'react';
import { useParentState } from '../useIframeState';
import { useForm, FormProvider } from 'react-hook-form';

// Mock the UserForm component to avoid i18n issues
const MockUserForm = ({ defaultValues, localeProp, onSubmit, submitLabel }) => {
  return (
    <div className="mock-user-form">
      <h2>User Form</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(defaultValues);
      }}>
        <div>
          <label>Name</label>
          <input type="text" defaultValue={defaultValues.name} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" defaultValue={defaultValues.email} />
        </div>
        <div>
          <label>Username</label>
          <input type="text" defaultValue={defaultValues.username} />
        </div>
        <button type="submit">{submitLabel}</button>
      </form>
    </div>
  );
};

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

  const form = useForm({
    defaultValues: state.defaultValues.value
  });

  const onSubmit = (data: any) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <FormProvider {...form}>
      <MockUserForm
        defaultValues={state.defaultValues.value}
        localeProp={state.localeProp.value}
        onSubmit={onSubmit}
        submitLabel={state.submitLabel.value}
      />
    </FormProvider>
  );
}