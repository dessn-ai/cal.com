import React from 'react';
import { useParentState } from '../useIframeState';
// Remove the actual import and create a mock component
// import ImportedComponent from '../../modules/settings/my-account/general-view';

// Mock component to avoid loading cal.com dependencies
const MockGeneralView = ({ revalidatePage }) => {
  return (
    <div>
      <h1>General Account Settings Mock</h1>
      <button onClick={revalidatePage}>Revalidate Page</button>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    revalidatePage: {
      type: "string",
      value: "async function",
      label: "Revalidate Page Function",
    },
  });

  const revalidatePage = async () => {
    console.log("Revalidating page...");
    // This is a mock function. In a real scenario, this would actually revalidate the page.
  };

  return (
    <div className="mock-preview">
      <MockGeneralView revalidatePage={revalidatePage} />
    </div>
  );
}