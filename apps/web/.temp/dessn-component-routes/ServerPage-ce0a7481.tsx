import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';

export default function ComponentPreview() {
  const [Component, setComponent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({}),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const ImportedComponent = (await import('../../app/(use-page-wrapper)/auth/forgot-password/page')).default;
        setComponent(() => ImportedComponent);
      } catch (err) {
        console.error('Failed to load component:', err);
        setError('Failed to load component');
      }
    };

    loadComponent();
  }, []);

  const props = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Component) {
    return <div>Loading...</div>;
  }

  try {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  } catch (err) {
    console.error('Render error:', err);
    return <div>Failed to render component</div>;
  }
}