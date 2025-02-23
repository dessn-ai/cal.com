import React from 'react';
import { useParentState } from '../useIframeState';
import { AlbyPaymentComponent } from '../../../../packages/app-store/alby/components/AlbyPaymentComponent';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    payment: {
      type: "string",
      value: JSON.stringify({
        data: {
          invoice: {
            paymentRequest: "lnbc1000n1p3hkzm3sp5gamp80lyc4rqnhwpexvr8hnfn289smq6wz5r7qmc6c7184qwz0qpp5jmrkva6h8zve6vs8qun0d3k6v3680zplcgx2l8as2t5hk3lhxhfsdqqcqzpgxqyz5vqsp5usyc4lk9chsfp53kvcnvq456ganh60d89reykdngsmtj6yw356es9q9qyyssqy4lgdj8m6m62fgjhygnpqz2nh9s2xzt6mzxw9kak5eln62w6m3tqcxvl32ahqa8zlf2xuuq6qy8h8evlq5gdkm2kqkxm7897lw3gycpn3m692"
          }
        }
      }),
      label: "Payment Data"
    },
    paymentPageProps: {
      type: "string",
      value: JSON.stringify({
        booking: {
          uid: "booking123",
          status: "PENDING"
        },
        eventType: {
          id: 1,
          successRedirectUrl: "https://example.com/success",
          forwardParamsSuccessRedirect: true
        },
        payment: {
          success: false
        }
      }),
      label: "Payment Page Props"
    }
  });

  const payment = JSON.parse(state.payment.value);
  const paymentPageProps = JSON.parse(state.paymentPageProps.value);

  return (
    <AlbyPaymentComponent
      payment={payment}
      paymentPageProps={paymentPageProps}
    />
  );
}