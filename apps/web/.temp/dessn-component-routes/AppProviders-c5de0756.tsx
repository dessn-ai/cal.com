import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../lib/app-providers-app-dir';

import { ReactElement, JSXElementConstructor, ReactNode } from 'react';
import { DehydratedState } from '@tanstack/react-query';
import { SSRConfig } from 'next-i18next';

// Set the mock function immediately
if (typeof window !== 'undefined') {
  window.getEmbedTheme = () => ({
    theme: 'light',
    brandColor: '#292929',
    darkBrandColor: '#fafafa',
    textColor: '#101010',
  });
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

  // Wrap the component in error boundary
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
    console.error('Error in AppProviders:', error);
    return (
      <div>
        <h2>Preview Error</h2>
        <p>There was an error loading the preview component. This might be due to missing dependencies or context providers.</p>
        {mockChildren}
      </div>
    );
  }
}

// Add TypeScript declaration for the window object
declare global {
  interface Window {
    getEmbedTheme: () => {
      theme: string;
      brandColor: string;
      darkBrandColor: string;
      textColor: string;
    };
  }
}