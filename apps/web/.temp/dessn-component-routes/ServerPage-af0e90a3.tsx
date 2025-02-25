import React from 'react';
import { useParentState } from '../useIframeState';

export default function ComponentPreview() {
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

  const [Component, setComponent] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const loadComponent = async () => {
      try {
        const ImportedComponent = (await import('../../app/(use-page-wrapper)/auth/login/page')).default;
        setComponent(() => ImportedComponent);
      } catch (err) {
        console.error('Failed to load component:', err);
        setError(err);
      }
    };

    loadComponent();
  }, []);

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Failed to load component. Please check the console for details.
      </div>
    );
  }

  if (!Component) {
    return <div className="p-4">Loading...</div>;
  }

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  try {
    return (
      <div className="h-full dark:bg-black">
        <div className="flex h-full items-center justify-center p-4">
          <Component params={params} searchParams={searchParams} />
        </div>
      </div>
    );
  } catch (err) {
    console.error('Error rendering component:', err);
    return (
      <div className="p-4 text-red-500">
        Error rendering component. Please check the console for details.
      </div>
    );
  }
}