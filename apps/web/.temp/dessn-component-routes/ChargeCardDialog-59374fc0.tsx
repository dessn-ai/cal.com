import React from 'react';
import { useParentState } from '../useIframeState';
import { ChargeCardDialog } from '../../components/dialog/ChargeCardDialog';


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
    paymentAmount: {
      type: "number",
      value: 5000,
      label: "Payment Amount (in cents)",
    },
    paymentCurrency: {
      type: "string",
      value: "USD",
      label: "Payment Currency",
    },
  });

  return (
    <ChargeCardDialog
      isOpenDialog={state.isOpenDialog.value}
      setIsOpenDialog={(value) => setState('isOpenDialog', value)}
      bookingId={state.bookingId.value}
      paymentAmount={state.paymentAmount.value}
      paymentCurrency={state.paymentCurrency.value}
    />
  );
}