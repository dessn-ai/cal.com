import React from 'react';
import { useParentState } from '../useIframeState';
import { AddGuestsDialog } from '../../components/dialog/AddGuestsDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Dialog Open",
    },
    bookingId: {
      type: "number",
      value: 1234,
      label: "Booking ID",
    },
  });

  return (
    <AddGuestsDialog
      isOpenDialog={state.isOpenDialog.value}
      setIsOpenDialog={(value) => setState('isOpenDialog', value)}
      bookingId={state.bookingId.value}
    />
  );
}