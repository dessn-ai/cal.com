import React from 'react';
import { useParentState } from '../useIframeState';

// Create a simple mock of the imported component
const MockImportedComponent = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="mb-8">
        <h1 className="font-cal text-emphasis mb-1 text-xl font-bold">General</h1>
        <p className="text-default text-sm">Manage your general account settings</p>
      </div>
      
      <div className="flex flex-col gap-6">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-default text-sm font-medium">Name</label>
            <input 
              type="text"
              className="border rounded-md p-2"
              placeholder="Your name"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-default text-sm font-medium">Email</label>
            <input 
              type="email"
              className="border rounded-md p-2"
              placeholder="your@email.com"
            />
          </div>
          
          <button 
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  try {
    return (
      <div className="p-6">
        <MockImportedComponent />
      </div>
    );
  } catch (error) {
    console.error('Error rendering component:', error);
    return (
      <div className="p-6">
        <h2 className="text-red-600 text-xl font-bold">Error Preview Fallback</h2>
        <p className="text-gray-700">Could not render the component. Error: {error.message}</p>
      </div>
    );
  }
}