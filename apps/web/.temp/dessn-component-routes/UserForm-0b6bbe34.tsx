import React from 'react';
import { useParentState } from '../useIframeState';
import { useForm, FormProvider } from 'react-hook-form';

// Mock UserForm component
const MockUserForm = ({ defaultValues, localeProp, onSubmit, submitLabel }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          defaultValue={defaultValues.name}
          className="block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          defaultValue={defaultValues.email}
          className="block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="username" className="block text-sm font-medium">Username</label>
        <input
          type="text"
          id="username"
          defaultValue={defaultValues.username}
          className="block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white"
        onClick={() => onSubmit(defaultValues)}
      >
        {submitLabel}
      </button>
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

  const methods = useForm({
    defaultValues: state.defaultValues.value
  });

  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <FormProvider {...methods}>
      <MockUserForm
        defaultValues={state.defaultValues.value}
        localeProp={state.localeProp.value}
        onSubmit={onSubmit}
        submitLabel={state.submitLabel.value}
      />
    </FormProvider>
  );
}