import React from 'react';
import { useParentState } from '../useIframeState';
import { ScheduleDay } from '../../../../packages/features/schedules/components/Schedule';
import { useForm, FormProvider } from 'react-hook-form';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return <div>Something went wrong</div>;
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {children}
    </React.Suspense>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "schedule.0",
      label: "Name",
    },
    weekday: {
      type: "string",
      value: "Monday",
      label: "Weekday",
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
      [state.name.value]: []
    }
  });

  // Initialize the form with an empty array first
  React.useEffect(() => {
    const schedule = [{
      start: new Date(2023, 0, 1, 9, 0), // 9 AM
      end: new Date(2023, 0, 1, 17, 0),  // 5 PM
    }];
    
    methods.reset({
      [state.name.value]: schedule
    });
  }, [state.name.value]);

  return (
    <ErrorBoundary>
      <FormProvider {...methods}>
        <div className="p-4">
          <ScheduleDay
            name={state.name.value}
            weekday={state.weekday.value}
            control={methods.control}
            CopyButton={<div />}
            disabled={state.disabled.value}
            userTimeFormat={state.userTimeFormat.value}
          />
        </div>
      </FormProvider>
    </ErrorBoundary>
  );
}