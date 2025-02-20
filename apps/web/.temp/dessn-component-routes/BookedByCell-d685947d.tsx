import React from 'react';
import { useParentState } from '../useIframeState';
import { BookedByCell } from '../../../../packages/features/insights/components/BookedByCell';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    attendees: {
      type: "string",
      value: JSON.stringify([
        { name: "John Doe", email: "john@example.com", timeZone: "America/New_York" },
        { name: "Jane Smith", email: "jane@example.com", timeZone: "Europe/London" }
      ]),
      label: "Attendees"
    },
    rowId: {
      type: "number",
      value: 1,
      label: "Row ID"
    }
  });

  const attendees = JSON.parse(state.attendees.value);

  return (
    <BookedByCell
      attendees={attendees}
      rowId={state.rowId.value}
    />
  );
}