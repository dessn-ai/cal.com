import React, { useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});
  const [Component, setComponent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/teams/other/page');
        setComponent(() => module.default);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load component');
        console.error('Component loading error:', err);
      }
    };

    loadComponent();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Component) {
    return <div>Loading...</div>;
  }

  const mockGetTranslate = async () => (key: string) => key;

  try {
    return (
      <div style={{ padding: '20px' }}>
        <Component getTranslate={mockGetTranslate} />
      </div>
    );
  } catch (err) {
    console.error('Rendering error:', err);
    return <div>Error rendering component: {err instanceof Error ? err.message : 'Unknown error'}</div>;
  }
}