import React, { Suspense, ErrorBoundary } from 'react';
import { useParentState } from '../useIframeState';
import { AppCategories } from "@calcom/prisma/enums";

// Create a simple error boundary component
class SimpleErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again.</div>;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    category: {
      type: "dropdown",
      value: "calendar",
      options: Object.values(AppCategories),
      label: "Category",
    },
  });

  const mockParams = {
    category: state.category.value,
  };

  const mockSearchParams = {};

  const ImportedComponentWrapper = React.lazy(() => {
    return import('../../app/(use-page-wrapper)/apps/installed/[category]/page')
      .then(module => ({
        default: (props) => {
          try {
            const Component = module.default;
            return <Component {...props} />;
          } catch (error) {
            console.error('Error rendering component:', error);
            return <div>Error loading component</div>;
          }
        }
      }))
      .catch(error => {
        console.error('Error importing component:', error);
        return {
          default: () => <div>Failed to load component</div>
        };
      });
  });

  return (
    <SimpleErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ padding: '20px' }}>
          <ImportedComponentWrapper
            params={mockParams}
            searchParams={mockSearchParams}
          />
        </div>
      </Suspense>
    </SimpleErrorBoundary>
  );
}