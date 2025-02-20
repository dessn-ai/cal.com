import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components and functions
const MockIcon = ({ name }: { name: string }) => <div>Icon: {name}</div>;

const mockShowToast = (message: string, type: string) => {
  console.log(`Toast: ${message}, type: ${type}`);
};

const MockButton = ({ children, color, href, target, EndIcon }: any) => (
  <button className={`mock-button-${color}`}>
    {children}
    {EndIcon && <span>{EndIcon}</span>}
  </button>
);

// Mock the VerifyPage component with all necessary functionality
const MockVerifyPage = ({ EMAIL_FROM }: { EMAIL_FROM: string }) => {
  const mockCustomer = {
    email: "test@example.com",
    username: "testuser"
  };

  const mockData = {
    valid: true,
    hasPaymentFailed: false,
    customer: mockCustomer
  };

  return (
    <div className="text-default bg-muted bg-opacity-90 backdrop-blur-md backdrop-grayscale backdrop-filter">
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="border-subtle bg-default m-10 flex max-w-2xl flex-col items-center rounded-xl border px-8 py-14 text-left">
          <div className="bg-default rounded-full p-3">
            <MockIcon name="mail-open" />
          </div>
          <h3 className="font-cal text-emphasis my-6 text-2xl font-normal leading-none">
            Check your Inbox
          </h3>
          <p className="text-muted dark:text-subtle text-base font-normal">
            We have sent an email to <b>{mockCustomer.email}</b> with a link to activate your account.
          </p>
          <div className="mt-7">
            <MockButton
              color="secondary"
              href={EMAIL_FROM ? `https://mail.google.com/mail/u/0/#search/from:${EMAIL_FROM}` : "https://mail.google.com/mail/u/0/"}
              target="_blank"
              EndIcon="external-link">
              Open in Gmail
            </MockButton>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-subtle text-base font-normal">Don't see an email?</p>
          <button className="underline underline-offset-2 hover:font-normal">
            Resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    EMAIL_FROM: {
      type: "string",
      value: "noreply@example.com",
      label: "EMAIL_FROM",
    },
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="preview-container">
        <MockVerifyPage EMAIL_FROM={state.EMAIL_FROM.value} />
      </div>
    </Suspense>
  );
}