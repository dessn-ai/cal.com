import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../lib/app-providers';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Child Component</div>",
      label: "Children",
    },
  });

  // Mock the required props
  const mockProps = {
    pageProps: {
      nonce: "mock-nonce",
      themeBasis: "light",
    },
    router: {
      query: {},
      pathname: "/",
      asPath: "/",
      basePath: "",
      isLocaleDomain: false,
      events: {},
      isFallback: false,
      isReady: true,
      isPreview: false,
    },
    Component: {
      isThemeSupported: true,
      isBookingPage: false,
    }
  };

  return (
    <ImportedComponent {...mockProps}>
      {state.children.value}
    </ImportedComponent>
  );
}