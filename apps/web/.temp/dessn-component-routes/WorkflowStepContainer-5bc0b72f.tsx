import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/components/WorkflowStepContainer';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
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
      value: {
        getValues: "function",
        setValue: "function",
        control: {
          _removeUnmounted: "function",
          _updateValid: "function",
          register: "function",
          unregister: "function",
          _getWatch: "function",
          _getDirty: "function",
          _updateFieldArray: "function",
          _getFieldArray: "function",
          _reset: "function",
          defaultValuesRef: { current: {} },
          _fields: {},
          _formValues: {},
          _formState: {
            isDirty: false,
            isSubmitted: false,
            submitCount: 0,
            touched: {},
            isSubmitting: false,
            isSubmitSuccessful: false,
            isValid: true,
            errors: {}
          },
          _names: {
            array: [],
            mount: [],
            unMount: [],
            watch: [],
            focus: "",
            watchAll: false
          },
          _subjects: {
            watch: { next: "function" },
            array: { next: "function" },
            state: { next: "function" }
          }
        },
        register: "function",
        formState: { errors: {} },
        clearErrors: "function",
        unregister: "function",
        watch: "function",
        handleSubmit: "function"
      },
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
      type: "string",
      value: "function",
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

  // Use real react-hook-form instead of mocking
  const methods = useForm({
    defaultValues: {
      reminderBody: state.step.value.reminderBody,
      emailSubject: state.step.value.emailSubject,
    }
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