import React from 'react';
import { useParentState } from '../useIframeState';
import { WithLayout } from '../../app/layoutHOC';

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
    ? (page: React.ReactElement) => <div>Custom Layout: {page}</div>
    : null;

  // For preview purposes, we'll use a simple synchronous layout
  const DummyPage = () => <div>Dummy Page Content</div>;

  // Create a simplified version for preview
  const PreviewComponent = () => {
    const page = <DummyPage />;
    if (getLayoutFunction) {
      return getLayoutFunction(page);
    }
    return page;
  };

  return <PreviewComponent />;
}