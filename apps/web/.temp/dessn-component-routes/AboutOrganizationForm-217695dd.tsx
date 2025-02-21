import React from 'react';
import { useParentState } from '../useIframeState';
import { AboutOrganizationForm } from '../../../../packages/features/ee/organizations/components/AboutOrganizationForm';

export default function ComponentPreview() {
  const [state] = useParentState({
    orgId: {
      type: "string",
      value: "org123",
      label: "Organization ID",
    },
  });

  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    try {
      // Set up all the mocks
      (global as any).useRouter = () => ({ 
        push: () => Promise.resolve(),
      });
      
      (global as any).useLocale = () => ({ 
        t: (key: string) => key,
      });
      
      (global as any).trpc = {
        viewer: {
          organizations: {
            update: {
              useMutation: () => ({
                mutate: async () => ({ update: true }),
                isPending: false,
              }),
            },
          },
        },
      };
      
      // Ensure useRouterQuery always returns an object with id
      (global as any).useRouterQuery = () => ({
        id: state.orgId.value || "org123", // Provide fallback
      });

      setIsReady(true);
    } catch (error) {
      console.error('Error setting up mocks:', error);
    }
  }, [state.orgId.value]);

  if (!isReady) {
    return <div>Setting up component...</div>;
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <AboutOrganizationForm />
      </ErrorBoundary>
    </React.Suspense>
  );
}

// Simple ErrorBoundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}