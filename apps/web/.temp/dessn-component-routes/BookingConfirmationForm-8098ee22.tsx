import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingConfirmationForm } from '../../../../packages/emails/src/components/BookingConfirmationForm';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    action: {
      type: "string",
      value: "https://example.com/submit",
      label: "Form Action URL",
    },
  });

  return (
    <BookingConfirmationForm action={state.action.value}>
      <p>This is a child element of the form.</p>
    </BookingConfirmationForm>
  );
}