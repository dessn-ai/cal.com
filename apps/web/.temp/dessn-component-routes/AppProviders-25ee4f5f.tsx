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

  // Mock the necessary props that AppProviders expects
  const mockProps = {
    pageProps: {
      nonce: "mock-nonce", // Provide a mock nonce
      themeBasis: "light",
    },
    Component: {
      isThemeSupported: true,
      isBookingPage: false,
    },
    router: {
      query: {},
    },
  };

  return (
    <ImportedComponent {...mockProps}>
      {state.children.value}
    </ImportedComponent>
  );
}