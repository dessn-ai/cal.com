import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock the VerifyEmailChange component since we can't use the server component directly in preview
const MockVerifyEmailChange = ({ success = true, error = null }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow">
        {success ? (
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Email Verification</h2>
            <p className="text-gray-600">Email change verification successful</p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Error</h2>
            <p className="text-red-600">{error || 'An error occurred during email verification'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ token: "abc123" }),
      label: "Search Params",
    },
  });

  try {
    const params = JSON.parse(state.params.value);
    const searchParams = JSON.parse(state.searchParams.value);

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <MockVerifyEmailChange success={true} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error in ComponentPreview:', error);
    return (
      <div className="p-4 text-red-600">
        Error: Failed to render component preview
      </div>
    );
  }
}