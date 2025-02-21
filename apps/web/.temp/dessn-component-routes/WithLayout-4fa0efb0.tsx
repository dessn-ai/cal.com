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

  const getServerLayoutFunction = state.getServerLayout.value === "custom"
    ? async (page: React.ReactElement) => <div>Custom Server Layout: {page}</div>
    : null;

  const DummyPage = () => <div>Dummy Page Content</div>;

  const WrappedComponent = WithLayout({
    getLayout: getLayoutFunction,
    getServerLayout: getServerLayoutFunction,
    Page: DummyPage,
    isBookingPage: state.isBookingPage.value,
    requiresLicense: state.requiresLicense.value,
  });

  return <WrappedComponent P="P" />;
}