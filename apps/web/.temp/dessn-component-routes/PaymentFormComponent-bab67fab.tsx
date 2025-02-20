import React from 'react';
import { useParentState } from '../useIframeState';

// Mock Payment Component instead of using the real one
const MockPaymentComponent = ({
  payment,
  eventType,
  user,
  location,
  clientSecret,
  booking,
  onSubmit,
  onCancel,
  onPaymentElementChange,
  paymentOption,
  state
}) => {
  return (
    <div className="mock-payment-form" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Payment Form Preview</h3>
      <div style={{ marginBottom: '20px' }}>
        <div>Amount: {payment.amount} {payment.currency}</div>
        <div>Payment Option: {paymentOption}</div>
        <div>Location: {location}</div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          padding: '15px', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          backgroundColor: '#f9f9f9'
        }}>
          [Stripe Payment Element Placeholder]
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={(e) => onSubmit(e)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#0055FF',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Pay Now
        </button>
        <button 
          onClick={onCancel}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f1f1f1',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

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
      value: "mock_client_secret",
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

  return (
    <MockPaymentComponent
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
  );
}