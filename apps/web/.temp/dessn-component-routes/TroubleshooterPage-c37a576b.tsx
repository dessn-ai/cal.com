import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/availability/troubleshoot/troubleshoot-view';

export default function ComponentPreview() {
  // Initialize with current date-related values
  const defaultState = {
    selectedDate: new Date().toISOString(),
    // Add a week range for safety
    dateRange: {
      start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    }
  };

  const [state, setState] = useParentState(defaultState);

  // Wrap the component in an error boundary to catch any date-related errors
  return (
    <ErrorBoundary fallback={<div>Error loading calendar</div>}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent 
          selectedDate={state.selectedDate}
          dateRange={state.dateRange}
        />
      </React.Suspense>
    </ErrorBoundary>
  );
}

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
      return this.props.fallback || <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}