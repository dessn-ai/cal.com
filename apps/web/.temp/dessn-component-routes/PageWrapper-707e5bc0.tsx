import React from 'react';
import { useParentState } from '../useIframeState';

// Mock Component for preview
const MockInnerComponent = ({ err }) => {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl">Preview Page</h1>
      <p>This is a preview of the page wrapper component</p>
    </div>
  );
};

// Mock simplified version of PageWrapper
const MockPageWrapper = ({ Component, pageProps, err, router }) => {
  // Add base styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --font-inter: 'Inter', sans-serif;
        --font-cal: 'Cal Sans', sans-serif;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const content = Component.requiresLicense ? (
    <div className="license-required">
      <MockInnerComponent {...pageProps} err={err} />
    </div>
  ) : (
    <MockInnerComponent {...pageProps} err={err} />
  );

  return (
    <div className="flex min-h-screen flex-col">
      <style jsx global>{`
        :root {
          --font-inter: 'Inter', sans-serif;
          --font-cal: 'Cal Sans', sans-serif;
        }
      `}</style>
      {content}
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

  // Create a proper Component object that combines the mock component with the required properties
  const ComponentWithProps = {
    ...MockInnerComponent,
    ...state.Component.value
  };

  return (
    <MockPageWrapper
      Component={ComponentWithProps}
      pageProps={state.pageProps.value}
      err={state.err.value}
      router={state.router.value}
    />
  );
}