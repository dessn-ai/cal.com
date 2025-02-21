import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../lib/app-providers-app-dir';
import { ReactElement, JSXElementConstructor } from 'react';

// Add mock function to window immediately
if (typeof window !== 'undefined') {
  window.getEmbedTheme = function() {
    return {
      theme: 'light',
      isEmbed: false
    };
  };
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    getLayout: {
      type: 'string',
      value: 'null',
      label: 'Get Layout Function',
    },
    requiresLicense: {
      type: 'boolean',
      value: false,
      label: 'Requires License',
    },
    nonce: {
      type: 'string',
      value: 'random-nonce-string',
      label: 'Nonce',
    },
    themeBasis: {
      type: 'string',
      value: 'light',
      label: 'Theme Basis',
    },
    isBookingPage: {
      type: 'boolean',
      value: false,
      label: 'Is Booking Page',
    },
  });

  const mockChildren = <div>Mock Children Content</div>;

  // Wrap the component render in a try-catch as a safety measure
  try {
    return (
      <ImportedComponent
        getLayout={state.getLayout.value === 'null' ? null : (page: ReactElement<any, string | JSXElementConstructor<any>>) => <div>{page}</div>}
        requiresLicense={state.requiresLicense.value}
        nonce={state.nonce.value}
        themeBasis={state.themeBasis.value}
        isBookingPage={state.isBookingPage.value}
      >
        {mockChildren}
      </ImportedComponent>
    );
  } catch (error) {
    console.error('Error rendering AppProviders:', error);
    return <div>Error rendering component</div>;
  }
}

// Add TypeScript declaration for the window object
declare global {
  interface Window {
    getEmbedTheme: () => { theme: string; isEmbed: boolean };
  }
}