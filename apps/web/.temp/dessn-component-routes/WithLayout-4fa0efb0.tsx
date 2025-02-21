import React from 'react';
import { useParentState } from '../useIframeState';

// Mock version of WithLayout that doesn't deal with async operations
const MockWithLayout = ({
  Page,
  getLayout,
  isBookingPage,
  requiresLicense,
}) => {
  const content = <Page />;
  
  if (getLayout) {
    return getLayout(content);
  }
  
  return (
    <div className="mock-layout">
      {isBookingPage && <div>Booking Page Layout</div>}
      {requiresLicense && <div>License Required Layout</div>}
      {content}
    </div>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({
    getLayout: {
      type: "dropdown",
      value: "null",
      options: ["null", "custom"],
      label: "Get Layout",
    },
    getServerLayout: {
      type: "dropdown",
      value: "null",
      options: ["null", "custom"],
      label: "Get Server Layout",
    },
    isBookingPage: {
      type: "boolean",
      value: false,
      label: "Is Booking Page",
    },
    requiresLicense: {
      type: "boolean",
      value: false,
      label: "Requires License",
    },
  });

  const getLayoutFunction = state.getLayout.value === "custom" 
    ? (page: React.ReactElement) => <div>Custom Layout: {page}</div>
    : null;

  const DummyPage = () => <div>Dummy Page Content</div>;

  return (
    <MockWithLayout
      Page={DummyPage}
      getLayout={getLayoutFunction}
      isBookingPage={state.isBookingPage.value}
      requiresLicense={state.requiresLicense.value}
    />
  );
}