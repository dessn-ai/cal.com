import React, { createContext } from 'react';
import { useParentState } from '../useIframeState';
import { AdminUserContainer } from '../../components/setup/AdminUser';
import { FormProvider, useForm } from 'react-hook-form';

// Mock AtomsProvider context and component
const AtomsContext = createContext({});

const MockAtomsProvider = ({ children }) => {
  const mockAtomValues = {
    // Add any necessary mock values that the child components might need
    theme: 'light',
    // Add other atom values as needed
  };

  return (
    <AtomsContext.Provider value={mockAtomValues}>
      {children}
    </AtomsContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    userCount: {
      type: "number",
      value: 0,
      label: "User Count",
    },
  });

  const methods = useForm();

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  const handleError = () => {
    console.log("Error occurred");
  };

  const handleSuccess = () => {
    console.log("Success");
  };

  return (
    <MockAtomsProvider>
      <FormProvider {...methods}>
        <AdminUserContainer
          userCount={state.userCount.value}
          onSubmit={handleSubmit}
          onError={handleError}
          onSuccess={handleSuccess}
        />
      </FormProvider>
    </MockAtomsProvider>
  );
}