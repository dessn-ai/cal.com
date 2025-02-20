import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { AppCategories } from "@calcom/prisma/enums";

// Create a simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}

const MockImportedComponent = ({ params, searchParams }) => {
  return (
    <div>
      <h2>Installed Apps - {params.category}</h2>
      <div>Mock Implementation for Installed Apps Page</div>
    </div>
  );
};

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

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <MockImportedComponent
          params={mockParams}
          searchParams={mockSearchParams}
        />
      </Suspense>
    </ErrorBoundary>
  );
}