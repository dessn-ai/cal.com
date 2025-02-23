import React from 'react';
import { useParentState } from '../useIframeState';
import { ReassignDialog } from '../../components/dialog/ReassignDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Open Dialog",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    bookingId: {
      type: "number",
      value: 123,
      label: "Booking ID",
    },
    bookingFromRoutingForm: {
      type: "boolean",
      value: false,
      label: "Booking From Routing Form",
    },
  });

  return (
    <ReassignDialog
      isOpenDialog={state.isOpenDialog.value}
      setIsOpenDialog={(value) => setState('isOpenDialog', value)}
      teamId={state.teamId.value}
      bookingId={state.bookingId.value}
      bookingFromRoutingForm={state.bookingFromRoutingForm.value}
    />
  );
}