import React from 'react';
import { useParentState } from '../useIframeState';
import { TestForm } from '../../../../packages/app-store/routing-forms/components/SingleForm';
import { FormProvider, useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock user data
const mockUser = {
  id: 1,
  name: "Test User",
  email: "test@example.com",
  username: "testuser",
};

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      response: {},
    }
  });

  const [state, setState] = useParentState({
    form: {
      type: "object",
      value: {
        id: "123",
        name: "Sample Form",
        description: "This is a sample form",
        teamId: 1,
        routes: [],
        fields: [],
        settings: {
          sendUpdatesTo: [],
          sendToAll: false,
        },
        _count: {
          responses: 0,
        },
        team: {
          name: "Sample Team",
          slug: "sample-team",
        },
        teamMembers: [],
        routers: [],
        connectedForms: [],
        user: mockUser,
      },
      label: "Form",
    },
    isTestPreviewOpen: {
      type: "boolean",
      value: true,
      label: "Is Test Preview Open",
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>
        <TestForm
          form={state.form.value}
          showAllData={true}
          renderFooter={(onClose) => (
            <div className="mt-4 flex justify-end space-x-2">
              <button 
                type="button" 
                onClick={() => {
                  setState("isTestPreviewOpen", false);
                  onClose();
                }}
                className="button">
                Close
              </button>
              <button type="submit" className="button">
                Test Routing
              </button>
            </div>
          )}
        />
      </FormProvider>
    </QueryClientProvider>
  );
}