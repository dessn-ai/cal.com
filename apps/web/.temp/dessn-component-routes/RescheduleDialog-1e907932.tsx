import React from 'react';
import { useParentState } from '../useIframeState';
import { RescheduleDialog } from '../../components/dialog/RescheduleDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Open Dialog",
    },
    bookingUId: {
      type: "string",
      value: "booking-123",
      label: "Booking UID",
    },
  });

  const setIsOpenDialog = (value: boolean) => {
    setState("isOpenDialog", value);
  };

  return (
    <RescheduleDialog
      isOpenDialog={state.isOpenDialog.value}
      setIsOpenDialog={setIsOpenDialog}
      bookingUId={state.bookingUId.value}
    />
  );
}