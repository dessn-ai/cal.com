import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventAvailabilityTabWebWrapper';
import { FormProvider, useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock proxy to handle any TRPC calls
const createMockTRPCProxy = () => {
  return new Proxy({}, {
    get: () => {
      return new Proxy({}, {
        get: () => () => ({
          data: null,
          isLoading: false,
          error: null
        })
      });
    }
  });
};

const MockTRPCProvider = ({ children }) => {
  const mockClient = createMockTRPCProxy();
  return <div data-testid="mock-trpc-provider">{children}</div>;
};

export default function ComponentPreview() {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
        staleTime: 0,
      },
    },
  }));

  const [state, setState] = useParentState({
    eventType: {
      type: 'string',
      value: JSON.stringify({
        id: 1,
        title: 'Sample Event',
        length: 60,
      }),
      label: 'Event Type',
    },
    isTeamEvent: {
      type: 'boolean',
      value: false,
      label: 'Is Team Event',
    },
    user: {
      type: 'string',
      value: JSON.stringify({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        defaultScheduleId: 1,
      }),
      label: 'User',
    },
    teamMembers: {
      type: 'string',
      value: JSON.stringify([
        { id: 1, name: 'Team Member 1' },
        { id: 2, name: 'Team Member 2' },
      ]),
      label: 'Team Members',
    },
  });

  const formMethods = useForm({
    defaultValues: {
      schedule: 1,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MockTRPCProvider>
        <FormProvider {...formMethods}>
          <ImportedComponent
            eventType={JSON.parse(state.eventType.value)}
            isTeamEvent={state.isTeamEvent.value}
            user={JSON.parse(state.user.value)}
            teamMembers={JSON.parse(state.teamMembers.value)}
          />
        </FormProvider>
      </MockTRPCProvider>
    </QueryClientProvider>
  );
}