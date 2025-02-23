import React from 'react';
import { useParentState } from '../useIframeState';

// Mock ErrorPage component
const ErrorPage = ({ 
  statusCode, 
  message, 
  error 
}: { 
  statusCode: number; 
  message: string; 
  error: { name: string; message: string; } 
}) => {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center">
      <h1 className="font-cal mb-4 text-[250px] font-semibold text-gray-900">
        {statusCode}
      </h1>
      <h2 className="mb-4 text-3xl text-gray-900">{error.name}</h2>
      <p className="mb-4 max-w-md text-center text-gray-600">{message}</p>
    </div>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({
    errorMessage: {
      type: "string",
      value: "An unexpected error occurred",
      label: "Error Message",
    },
    errorName: {
      type: "string",
      value: "Internal Server Error",
      label: "Error Name",
    },
    statusCode: {
      type: "number",
      value: 500,
      label: "Status Code",
    },
  });

  const error = {
    name: state.errorName.value,
    message: state.errorMessage.value,
    statusCode: state.statusCode.value
  };

  return (
    <ErrorPage 
      statusCode={error.statusCode} 
      message={error.message} 
      error={error}
    />
  );
}