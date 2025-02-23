import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/payments/components/Payment';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const mockStripe = {
  elements: () => mockElements,
  confirmPayment: () => Promise.resolve({}),
  confirmSetup: () => Promise.resolve({}),
};

const mockElements = {
  getElement: () => ({}),
  update: () => ({}),
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    payment: {
      type: "dropdown",
      value: "ON_BOOKING",
      options: ["ON_BOOKING", "HOLD"],
      label: "Payment Option",
    },
    amount: {
      type: "number",
      value: 1000,
      label: "Amount (in cents)",
    },
    currency: {
      type: "string",
      value: "USD",
      label: "Currency",
    },
    successRedirectUrl: {
      type: "string",
      value: "https://example.com/success",
      label: "Success Redirect URL",
    },
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
  });

  const props = {
    payment: {
      amount: state.amount.value,
      currency: state.currency.value,
      paymentOption: state.payment.value,
      data: {
        stripe_publishable_key: "pk_test_mock_key",
      },
    },
    eventType: {
      id: 1,
      successRedirectUrl: state.successRedirectUrl.value,
      forwardParamsSuccessRedirect: true,
    },
    user: {
      username: state.username.value,
    },
    clientSecret: "pi_1234567890_secret_abcdefghijklmnop",
    booking: {
      uid: "mock_booking_uid",
    },
  };

  const stripePromise = Promise.resolve(mockStripe);

  return (
    <Elements stripe={stripePromise} options={{ clientSecret: props.clientSecret }}>
      <ImportedComponent {...props} />
    </Elements>
  );
}