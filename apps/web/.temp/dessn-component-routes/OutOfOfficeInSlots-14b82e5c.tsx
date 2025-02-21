import React from 'react';
import { useParentState } from '../useIframeState';
import { OutOfOfficeInSlots } from '../../../../packages/features/bookings/Booker/components/OutOfOfficeInSlots';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    date: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "Date",
    },
    fromUser: {
      type: "string",
      value: JSON.stringify({ id: 1, displayName: "John Doe" }),
      label: "From User",
    },
    toUser: {
      type: "string",
      value: JSON.stringify({ id: 2, username: "jane_smith", displayName: "Jane Smith" }),
      label: "To User",
    },
    emoji: {
      type: "string",
      value: "🏝️",
      label: "Emoji",
    },
    reason: {
      type: "string",
      value: "Annual leave",
      label: "Reason",
    },
    borderDashed: {
      type: "boolean",
      value: true,
      label: "Border Dashed",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <OutOfOfficeInSlots
      date={state.date.value}
      fromUser={JSON.parse(state.fromUser.value)}
      toUser={JSON.parse(state.toUser.value)}
      emoji={state.emoji.value}
      reason={state.reason.value}
      borderDashed={state.borderDashed.value}
      className={state.className.value}
    />
  );
}