import React from 'react';
import { useParentState } from '../useIframeState';

// Simple mock component in case the import fails
const MockComponent = (props) => (
  <div>
    <h1>Organization Edit Page</h1>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);

export default function ComponentPreview() {
  const [state] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "1" }),
      label: "Params",
    },
  });

  const [Component, setComponent] = React.useState(() => MockComponent);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const params = React.useMemo(() => {
    try {
      return {
        params: JSON.parse(state?.params?.value || '{"id":"1"}')
      };
    } catch (e) {
      console.error('Error parsing params:', e);
      return { params: { id: "1" } };
    }
  }, [state?.params?.value]);

  React.useEffect(() => {
    const loadComponent = async () => {
      try {
        setIsLoading(true);
        const module = await import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/organizations/[id]/edit/page');
        setComponent(() => module.default || MockComponent);
      } catch (error) {
        console.error('Failed to load component:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadComponent();
  }, []);

  if (error) {
    return (
      <div className="preview-wrapper error">
        <h2>Error loading component</h2>
        <pre>{error.message}</pre>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="preview-wrapper loading">
        <h2>Loading component...</h2>
      </div>
    );
  }

  return (
    <div className="preview-wrapper">
      <Component {...params} />
    </div>
  );
}