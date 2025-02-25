import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingAtCell } from '../../../../packages/features/insights/components/BookingAtCell';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    row: {
      type: "string",
      value: JSON.stringify({
        bookingUserId: 1,
        bookingCreatedAt: new Date().toISOString(),
        bookingUserAvatarUrl: "https://example.com/avatar.jpg",
        bookingUserName: "John Doe",
        bookingUid: "abc123",
        bookingUserEmail: "john@example.com",
        bookingStatus: "ACCEPTED",
        response: {},
        responseLowercase: {}
      }),
      label: "Row Data"
    },
    rowId: {
      type: "number",
      value: 1,
      label: "Row ID"
    }
  });

  const rowData = JSON.parse(state.row.value);

  return (
    <BookingAtCell
      row={rowData}
      rowId={state.rowId.value}
    />
  );
}