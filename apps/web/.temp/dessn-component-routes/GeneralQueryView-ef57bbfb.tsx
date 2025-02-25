import React from 'react';
import { useParentState } from '../useIframeState';

// Mock the main component instead of importing it
const MockGeneralView = ({ revalidatePage }: { revalidatePage: () => Promise<void> }) => {
  return (
    <div className="mock-general-view">
      <h1>General Account Settings</h1>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label>Username</label>
          <input type="text" placeholder="username" className="border p-2" />
        </div>
        <div className="flex flex-col space-y-2">
          <label>Email</label>
          <input type="email" placeholder="email" className="border p-2" />
        </div>
        <button 
          onClick={() => revalidatePage()} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </div>
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

  // Render the mock component directly without all the providers
  return <MockGeneralView revalidatePage={revalidatePage} />;
}