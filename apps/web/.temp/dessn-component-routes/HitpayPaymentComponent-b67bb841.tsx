import React from 'react';
import { useParentState } from '../useIframeState';
import { HitpayPaymentComponent } from '../../../../packages/app-store/hitpay/components/HitpayPaymentComponent';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    paymentData: {
      type: "string",
      value: JSON.stringify({ url: "https://example.com/payment" }),
      label: "Payment Data (JSON)",
    },
  });

  const payment = {
    data: JSON.parse(state.paymentData.value),
  };

  return <HitpayPaymentComponent payment={payment} />;
}