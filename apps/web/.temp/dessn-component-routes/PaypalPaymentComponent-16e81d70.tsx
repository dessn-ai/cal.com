import React from 'react';
import { useParentState } from '../useIframeState';
import { PaypalPaymentComponent } from '../../../../packages/app-store/paypal/components/PaypalPaymentComponent';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    paymentData: {
      type: "string",
      value: JSON.stringify({
        order: {
          id: "ORDER123456",
          status: "CREATED",
          links: [
            {
              href: "https://www.sandbox.paypal.com/checkoutnow?token=ORDER123456",
              rel: "approve",
              method: "GET"
            }
          ]
        }
      }),
      label: "Payment Data"
    }
  });

  const payment = {
    data: JSON.parse(state.paymentData.value)
  };

  return <PaypalPaymentComponent payment={payment} />;
}