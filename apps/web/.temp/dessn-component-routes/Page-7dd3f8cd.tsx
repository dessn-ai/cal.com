import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock providers and context
const MockBillingContext = React.createContext({
  subscription: null,
  loading: false,
  error: null
});

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

// Mock the billing component in case the import fails
const MockBillingComponent = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Billing Page</h1>
      <div className="mt-4">
        <p>Billing information would be displayed here</p>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Use React.lazy with a fallback to mock component if import fails
  const BillingComponent = React.lazy(() => 
    import('../../app/(use-page-wrapper)/settings/(settings-layout)/billing/page')
      .catch(() => ({ default: MockBillingComponent }))
  );

  return (
    <ErrorBoundary>
      <MockBillingContext.Provider value={{ subscription: null, loading: false, error: null }}>
        <div className="w-full">
          <Suspense fallback={<div>Loading billing information...</div>}>
            <BillingComponent />
          </Suspense>
        </div>
      </MockBillingContext.Provider>
    </ErrorBoundary>
  );
}