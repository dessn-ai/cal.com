import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/components/PoweredBy';

// Simple error boundary component
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
      return <div>Error loading component</div>;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    logoOnly: {
      type: "boolean",
      value: false,
      label: "Logo Only",
    },
    hasValidLicense: {
      type: "dropdown",
      value: "true",
      options: ["true", "false", "null"],
      label: "Has Valid License",
    },
  });

  const hasValidLicense = state.hasValidLicense.value === "true" 
    ? true 
    : state.hasValidLicense.value === "false" 
      ? false 
      : null;

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent 
          logoOnly={state.logoOnly.value}
          hasValidLicense={hasValidLicense}
        />
      </React.Suspense>
    </ErrorBoundary>
  );
}