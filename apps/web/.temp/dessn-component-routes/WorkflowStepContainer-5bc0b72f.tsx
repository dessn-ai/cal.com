import React from 'react';
import ImportedComponent from '../../../../packages/features/ee/workflows/components/WorkflowStepContainer';
import { FormProvider, useForm } from 'react-hook-form';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        email_subject: "Email Subject",
        email_body: "Email Body",
        text_message: "Text Message",
        trigger: "Trigger",
        action: "Action",
        when: "When",
        do_this: "Do This",
        how_long_after: "How long after",
        how_long_before: "How long before",
        sender_id: "Sender ID",
        sender_name: "Sender Name",
        include_calendar_event: "Include Calendar Event",
        make_phone_number_required: "Make Phone Number Required",
        send_code: "Send Code",
        verify: "Verify",
        verified_successfully: "Verified Successfully",
        message_template: "Message Template"
      }
    }
  }
});

// Mock trpc provider
const TRPCProvider = ({ children }) => children;

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      steps: [{
        id: 'step1',
        stepNumber: 1,
        action: 'EMAIL_ATTENDEE',
        template: 'REMINDER',
        reminderBody: 'This is a reminder for your upcoming event.',
        emailSubject: 'Reminder: Upcoming Event',
        includeCalendarEvent: true
      }]
    }
  });

  // Create static props instead of using useParentState
  const props = {
    step: {
      id: "step1",
      stepNumber: 1,
      action: "EMAIL_ATTENDEE",
      template: "REMINDER",
      reminderBody: "This is a reminder for your upcoming event.",
      emailSubject: "Reminder: Upcoming Event",
      includeCalendarEvent: true,
    },
    form: methods,
    user: {
      id: "user1",
      name: "John Doe",
      email: "john@example.com",
      timeFormat: 12,
    },
    reload: false,
    setReload: () => {},
    teamId: 1,
    readOnly: false,
  };

  // Mock the trpc context
  const mockTrpc = {
    useUtils: () => ({}),
    viewer: {
      workflows: {
        getVerifiedNumbers: {
          useQuery: () => ({ data: [] })
        },
        getVerifiedEmails: {
          useQuery: () => ({ data: [] })
        },
        getWorkflowActionOptions: {
          useQuery: () => ({
            data: [
              { value: 'EMAIL_ATTENDEE', label: 'Email Attendee' },
              { value: 'SMS_ATTENDEE', label: 'SMS Attendee' }
            ]
          })
        }
      }
    }
  };

  // Add trpc to global window object
  if (typeof window !== 'undefined') {
    window.trpc = mockTrpc;
  }

  return (
    <I18nextProvider i18n={i18next}>
      <TRPCProvider>
        <FormProvider {...methods}>
          <ImportedComponent {...props} />
        </FormProvider>
      </TRPCProvider>
    </I18nextProvider>
  );
}