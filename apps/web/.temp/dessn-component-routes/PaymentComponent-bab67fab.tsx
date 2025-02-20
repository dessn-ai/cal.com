import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/payments/components/Payment';

// Mock implementation of the private-api-utils
const mockPrivateApiUtils = {
  generateNonce: () => "1234567890abcdef",
  createSignature: () => "mock_signature_123"
};

// Override the import
import('../../../../packages/features/ee/common/server/private-api-utils').then(() => {});

// @ts-ignore
window.__mocks__ = {
  ...window.__mocks__,
  '../../../../packages/features/ee/common/server/private-api-utils': mockPrivateApiUtils
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
        stripe_publishable_key: "pk_test_51MxMYt2ZB0GzwR6WjN6W6Zv4nZ6Q8Zv4nZ6Q8Zv4n",
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
    clientSecret: "pi_3NqL2x2eZvKYlo2C1bJrGkqz_secret_O0HjWX47VjKbhBXqXoVVXNGlP",
    booking: {
      uid: "mock_booking_uid",
    },
  };

  return (
    <div className="bg-white p-6">
      <ImportedComponent {...props} />
    </div>
  );
}