import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/PageWrapperAppDir';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    requiresLicense: {
      type: "boolean",
      value: false,
      label: "Requires License",
    },
    nonce: {
      type: "string",
      value: "random-nonce-value",
      label: "Nonce",
    },
    themeBasis: {
      type: "string",
      value: "light",
      label: "Theme Basis",
    },
    isBookingPage: {
      type: "boolean",
      value: false,
      label: "Is Booking Page",
    },
  });

  const mockChildren = <div>Mock Children Content</div>;

  return (
    <ImportedComponent
      requiresLicense={state.requiresLicense.value}
      nonce={state.nonce.value}
      themeBasis={state.themeBasis.value}
      isBookingPage={state.isBookingPage.value}
    >
      {mockChildren}
    </ImportedComponent>
  );
}