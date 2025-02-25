import React, { Suspense, useState } from 'react';
import { useParentState } from '../useIframeState';

const ErrorFallback = ({ error }: { error: Error }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
);

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error!} />;
    }
    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    heading: {
      type: "string",
      value: "Availability",
      label: "Heading",
    },
    subtitle: {
      type: "string",
      value: "Configure availability",
      label: "Subtitle",
    },
  });

  const [ImportedComponent, setImportedComponent] = useState<any>(null);
  const [ShellMainAppDir, setShellMainAppDir] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  React.useEffect(() => {
    const loadComponents = async () => {
      try {
        const [pageModule, shellModule] = await Promise.all([
          import('../../app/(use-page-wrapper)/(main-nav)/availability/page').then(m => m.default),
          import('../../app/(use-page-wrapper)/(main-nav)/ShellMainAppDir').then(m => m.ShellMainAppDir)
        ]);
        setImportedComponent(() => pageModule);
        setShellMainAppDir(() => shellModule);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load components'));
        console.error('Failed to load components:', err);
      }
    };

    loadComponents();
  }, []);

  const mockGetTranslate = () => (key: string) => state[key as keyof typeof state]?.value || key;

  if (error) {
    return <ErrorFallback error={error} />;
  }

  if (!ImportedComponent || !ShellMainAppDir) {
    return <div>Loading components...</div>;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ padding: '20px' }}>
          {ShellMainAppDir && (
            <ShellMainAppDir
              heading={state.heading.value}
              subtitle={state.subtitle.value}
              CTA={<div>Mock CTA</div>}
            >
              {ImportedComponent && <ImportedComponent getTranslate={mockGetTranslate} />}
            </ShellMainAppDir>
          )}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}