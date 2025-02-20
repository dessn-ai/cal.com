import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';

// Create a mock component wrapper to handle the import
const createSafeComponent = () => {
  const Component = React.lazy(() => 
    import('../../../../packages/app-store/routing-forms/pages/layout-handler/[...appPages]')
      .catch(() => ({
        default: () => <div>Failed to load component</div>
      }))
  );

  return function SafeComponent(props) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};

const ImportedComponent = createSafeComponent();

// Mock data including the SchedulingType
const mockData = {
  schedulingType: 'ROUND_ROBIN',
  form: {
    fields: [],
    routes: [],
    settings: {}
  },
  appUrl: '/routing-forms',
  // Add other required props here
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    exampleProp: {
      type: "string",
      value: "Example Value",
      label: "Example Prop",
    },
    ...mockData
  });

  const methods = useForm({
    defaultValues: {
      // Add any form default values here
    }
  });

  return (
    <div className="w-full">
      <FormProvider {...methods}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <ImportedComponent {...state} />
        </ErrorBoundary>
      </FormProvider>
    </div>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught in boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}