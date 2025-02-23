import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/components/WorkflowStepContainer';


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
        getValues: () => ({}),
        setValue: () => {},
        register: () => ({}),
        control: {},
        formState: { errors: {} },
        clearErrors: () => {},
        unregister: () => {},
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
      type: "function",
      value: () => {},
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
    <ImportedComponent
      step={state.step.value}
      form={state.form.value}
      user={state.user.value}
      reload={state.reload.value}
      setReload={state.setReload.value}
      teamId={state.teamId.value}
      readOnly={state.readOnly.value}
    />
  );
}