import React from 'react';
import { useParentState } from '../useIframeState';

// Simplified preview version that mimics WithLayout behavior
function PreviewLayoutWrapper({
  children,
  getLayout,
  isBookingPage,
  requiresLicense,
}: {
  children: React.ReactNode;
  getLayout: ((page: React.ReactElement) => React.ReactNode) | null;
  isBookingPage: boolean;
  requiresLicense: boolean;
}) {
  const content = getLayout ? getLayout(children as React.ReactElement) : children;
  
  return (
    <div className="preview-wrapper">
      <div className="preview-meta">
        {isBookingPage && <div className="preview-tag">Booking Page</div>}
        {requiresLicense && <div className="preview-tag">Requires License</div>}
      </div>
      {content}
    </div>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
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
    ? (page: React.ReactElement) => (
        <div className="custom-layout">
          <div className="layout-header">Custom Layout Header</div>
          {page}
          <div className="layout-footer">Custom Layout Footer</div>
        </div>
      )
    : null;

  const DummyPage = () => <div>Dummy Page Content</div>;

  return (
    <PreviewLayoutWrapper
      getLayout={getLayoutFunction}
      isBookingPage={state.isBookingPage.value}
      requiresLicense={state.requiresLicense.value}
    >
      <DummyPage />
    </PreviewLayoutWrapper>
  );
}