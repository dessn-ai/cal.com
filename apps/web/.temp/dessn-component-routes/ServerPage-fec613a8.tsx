import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock the MeetingEnded component since we can't directly use the server component
const MockMeetingEnded = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Meeting Ended</h1>
      <p>This is a preview of the meeting ended page</p>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ uid: "example-uid" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example" }),
      label: "Search Params",
    },
  });

  try {
    const params = JSON.parse(state.params.value);
    const searchParams = JSON.parse(state.searchParams.value);

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <MockMeetingEnded />
      </Suspense>
    );
  } catch (error) {
    return (
      <div className="p-4 text-red-500">
        <h2>Error Preview</h2>
        <p>{error instanceof Error ? error.message : 'An error occurred'}</p>
      </div>
    );
  }
}