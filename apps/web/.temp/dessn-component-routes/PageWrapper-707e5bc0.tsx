import React from 'react';
import { useParentState } from '../useIframeState';
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "next-themes";

// Simple mock component
const MockComponent = ({ children, ...props }) => {
  return (
    <div className="mock-component">
      <h1>Preview Component</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

// Mock providers to avoid dependency issues
const MockMetaProvider = ({ children }) => <>{children}</>;
const MockFeatureProvider = ({ children }) => <>{children}</>;
const MockOrgBrandingProvider = ({ children }) => <>{children}</>;

function PreviewPageWrapper({ Component, pageProps, err, router }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="preview-theme">
      <TooltipProvider>
        <MockFeatureProvider>
          <MockOrgBrandingProvider>
            <MockMetaProvider>
              <Component {...pageProps} err={err} />
            </MockMetaProvider>
          </MockOrgBrandingProvider>
        </MockFeatureProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}

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

  // Create a proper React component with the necessary properties
  const PreviewComponent = () => <MockComponent {...state.pageProps.value} />;
  PreviewComponent.requiresLicense = false;
  PreviewComponent.isThemeSupported = true;
  PreviewComponent.isBookingPage = false;

  return (
    <PreviewPageWrapper
      Component={PreviewComponent}
      pageProps={state.pageProps.value}
      err={state.err.value}
      router={state.router.value}
    />
  );
}