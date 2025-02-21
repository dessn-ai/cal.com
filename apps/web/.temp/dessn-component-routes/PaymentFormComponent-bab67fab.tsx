import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/payments/components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with the test publishable key
const stripePromise = loadStripe('pk_test_123');

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    payment: {
      type: "object",
      value: {
        amount: 1000,
        currency: "USD",
        paymentOption: "ON_BOOKING",
        data: {
          stripe_publishable_key: "pk_test_123"
        }
      },
      label: "Payment"
    },
    eventType: {
      type: "object",
      value: {
        id: 1,
        successRedirectUrl: "https://example.com/success",
        forwardParamsSuccessRedirect: true
      },
      label: "Event Type"
    },
    user: {
      type: "object",
      value: {
        username: "testuser"
      },
      label: "User"
    },
    location: {
      type: "string",
      value: "Online",
      label: "Location"
    },
    clientSecret: {
      type: "string",
      value: "pi_3NtUhF2eZvKYlo2C1gels7xR_secret_MhCM9v5sFNh3p5uLgGQXlxrzd",
      label: "Client Secret"
    },
    booking: {
      type: "object",
      value: {
        uid: "booking123"
      },
      label: "Booking"
    }
  });

  const options = {
    clientSecret: state.clientSecret.value,
    appearance: {
      theme: 'stripe'
    }
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <ImportedComponent
        payment={state.payment.value}
        eventType={state.eventType.value}
        user={state.user.value}
        location={state.location.value}
        clientSecret={state.clientSecret.value}
        booking={state.booking.value}
        onSubmit={(ev) => {
          ev.preventDefault();
          console.log("Form submitted");
        }}
        onCancel={() => console.log("Cancelled")}
        onPaymentElementChange={() => console.log("Payment element changed")}
        elements={null}
        paymentOption={state.payment.value.paymentOption}
        state={{ status: "idle" }}
      />
    </Elements>
  );
}