import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/components/WorkflowStepContainer';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const defaultValues = {
    emailSubject: 'Reminder: Upcoming Event',
    reminderBody: 'This is a reminder for your upcoming event.',
    includeCalendarEvent: true,
    sendTo: 'EMAIL_ATTENDEE',
    numberRequired: 1,
    timeUnit: 'hours',
    action: 'EMAIL_ATTENDEE',
    template: 'REMINDER',
  };

  const methods = useForm({
    defaultValues
  });

  // Create a serializable form state object without functions
  const serializableForm = {
    values: defaultValues,
    formState: { 
      errors: {},
      isDirty: false,
      isValidating: false,
      dirtyFields: {},
      isSubmitted: false,
      submitCount: 0,
      touchedFields: {},
      isSubmitting: false,
      isSubmitSuccessful: false,
      isValid: false,
    }
  };

  const [state, setState] = useParentState({
    step: {
      type: "object",
      value: {
        id: "step1",
        stepNumber: 1,
        action: "EMAIL_ATTENDEE",
        template: "REMINDER",
        reminderBody: "This is a reminder for your upcoming event.",
        emailSubject: "Reminder: Upcoming Event",
        includeCalendarEvent: true,
      },
      label: "Step",
    },
    form: {
      type: "object",
      value: serializableForm,
      label: "Form",
    },
    user: {
      type: "object",
      value: {
        id: "user1",
        name: "John Doe",
        email: "john@example.com",
        timeFormat: 12,
      },
      label: "User",
    },
    reload: {
      type: "boolean",
      value: false,
      label: "Reload",
    },
    setReload: {
      type: "object",
      value: { type: "function" },
      label: "Set Reload",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    readOnly: {
      type: "boolean",
      value: false,
      label: "Read Only",
    },
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        step={state.step.value}
        form={methods}
        user={state.user.value}
        reload={state.reload.value}
        setReload={() => {}}
        teamId={state.teamId.value}
        readOnly={state.readOnly.value}
      />
    </FormProvider>
  );
}