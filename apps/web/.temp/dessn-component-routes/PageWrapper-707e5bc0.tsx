import React from 'react';
import { useParentState } from '../useIframeState';

// Mock component to render instead of the actual component
const MockChildComponent = ({ err, ...props }) => {
  return (
    <div className="mock-child-component">
      <h1>Mock Component</h1>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
};

// Create a simplified mock version of PageWrapper that doesn't use Next.js specific features
const MockPageWrapper = ({ Component, pageProps, err, router }) => {
  const nonce = typeof window !== "undefined" ? (pageProps.nonce ? "" : undefined) : pageProps.nonce;
  
  return (
    <div className="mock-page-wrapper">
      <style jsx global>{`
        :root {
          --font-inter: 'Inter', sans-serif;
          --font-cal: 'Cal Sans', sans-serif;
        }
        .mock-page-wrapper {
          padding: 20px;
          font-family: var(--font-inter);
        }
        .license-required {
          border: 2px solid #ffd700;
          padding: 20px;
          margin: 20px;
        }
      `}</style>
      {Component.requiresLicense ? (
        <div className="license-required">
          <MockChildComponent {...pageProps} err={err} />
        </div>
      ) : (
        <MockChildComponent {...pageProps} err={err} />
      )}
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    Component: {
      type: 'object',
      value: {
        requiresLicense: false,
        isThemeSupported: true,
        isBookingPage: false,
      },
      label: 'Component',
    },
    pageProps: {
      type: 'object',
      value: {
        nonce: 'randomNonce123',
        themeBasis: 'light',
        session: {
          hasValidLicense: true,
          upId: 'user123',
          user: {
            id: 1,
            email: 'user@example.com',
            name: 'John Doe',
          },
        },
      },
      label: 'Page Props',
    },
    err: {
      type: 'object',
      value: null,
      label: 'Error',
    },
    router: {
      type: 'object',
      value: {
        pathname: '/home',
        asPath: '/home',
      },
      label: 'Router',
    },
  });

  return (
    <MockPageWrapper
      Component={state.Component.value}
      pageProps={state.pageProps.value}
      err={state.err.value}
      router={state.router.value}
    />
  );
}