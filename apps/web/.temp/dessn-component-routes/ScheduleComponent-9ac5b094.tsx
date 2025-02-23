import React from 'react';
import { useParentState } from '../useIframeState';
import { ScheduleComponent } from '../../../../packages/features/schedules/components/Schedule';
import { useForm, FormProvider } from 'react-hook-form';
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

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "schedule",
      label: "Name",
    },
    weekStart: {
      type: "number",
      value: 0,
      label: "Week Start",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    userTimeFormat: {
      type: "number",
      value: 12,
      label: "User Time Format",
    },
  });

  const methods = useForm({
    defaultValues: {
      [state.name.value]: [[], [], [], [], [], [], []],
    },
  });

  // Wrap everything in error boundary and required providers
  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>
        <div className="w-full">
          <ScheduleComponent
            name={state.name.value}
            control={methods.control}
            weekStart={state.weekStart.value}
            disabled={state.disabled.value}
            userTimeFormat={state.userTimeFormat.value}
          />
        </div>
      </FormProvider>
    </QueryClientProvider>
  );
}