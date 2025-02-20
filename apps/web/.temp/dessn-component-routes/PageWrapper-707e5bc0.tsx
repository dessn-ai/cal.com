import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/PageWrapper';


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
    <ImportedComponent
      Component={state.Component.value}
      pageProps={state.pageProps.value}
      err={state.err.value}
      router={state.router.value}
    />
  );
}