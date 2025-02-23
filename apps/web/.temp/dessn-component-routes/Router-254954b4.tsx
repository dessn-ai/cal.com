import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';

// Create a simple error boundary component
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return <div>Something went wrong loading the component.</div>;
  }
  
  return children;
};

export default function ComponentPreview() {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  const [state, setState] = useParentState({
    formName: {
      type: "string",
      value: "Sample Form",
      label: "Form Name",
    },
    message: {
      type: "string",
      value: "Welcome to the router page",
      label: "Message",
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
  });

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Dynamic import with error handling
        const module = await import('../../pages/router/index');
        setComponent(() => module.default);
      } catch (err) {
        console.error('Failed to load component:', err);
        setError(err);
      }
    };

    loadComponent();
  }, []);

  const mockForm = {
    name: state.formName.value,
    id: 1,
    description: '',
    userId: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  if (error) {
    return <div>Error loading component: {error.message}</div>;
  }

  if (!Component) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="preview-container">
          <Component
            form={mockForm}
            message={state.message.value}
            isEmbed={state.isEmbed.value}
          />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}