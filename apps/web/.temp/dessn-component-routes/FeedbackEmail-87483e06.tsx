import React from 'react';
import { useParentState } from '../useIframeState';
import { FeedbackEmail } from '../../../../packages/emails/src/templates/FeedbackEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    username: {
      type: "string",
      value: "John Doe",
      label: "Username",
    },
    email: {
      type: "string",
      value: "johndoe@example.com",
      label: "Email",
    },
    rating: {
      type: "string",
      value: "5 stars",
      label: "Rating",
    },
    comment: {
      type: "string",
      value: "Great service!",
      label: "Comment",
    },
    subject: {
      type: "string",
      value: "Feedback",
      label: "Subject",
    },
    title: {
      type: "string",
      value: "Feedback",
      label: "Title",
    },
    hideLogo: {
      type: "boolean",
      value: false,
      label: "Hide Logo",
    },
  });

  return (
    <FeedbackEmail
      username={state.username.value}
      email={state.email.value}
      rating={state.rating.value}
      comment={state.comment.value}
      subject={state.subject.value}
      title={state.title.value}
      hideLogo={state.hideLogo.value}
    />
  );
}