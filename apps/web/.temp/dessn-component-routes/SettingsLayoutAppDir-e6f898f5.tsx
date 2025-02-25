import React, { Component, Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Simple fallback layout component
const FallbackLayout = ({ children, containerClassName }) => {
  return (
    <div className={containerClassName}>
      {children}
    </div>
  );
};

// Error boundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in settings layout:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <FallbackLayout {...this.props} />;
    }
    return this.props.children;
  }
}

// Loading component
const LoadingComponent = () => (
  <div>Loading settings layout...</div>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Content</div>",
      label: "Children",
    },
    containerClassName: {
      type: "string",
      value: "container-class",
      label: "Container Class Name",
    },
  });

  const [Layout, setLayout] = React.useState(() => FallbackLayout);

  React.useEffect(() => {
    // Dynamically import the layout component
    import('../../app/(use-page-wrapper)/settings/(settings-layout)/layout')
      .then(module => {
        setLayout(() => module.default);
      })
      .catch(err => {
        console.error('Failed to load layout component:', err);
        setLayout(() => FallbackLayout);
      });
  }, []);

  const childrenContent = (
    <div dangerouslySetInnerHTML={{ __html: state.children.value }} />
  );

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<LoadingComponent />}>
        <Layout
          children={childrenContent}
          containerClassName={state.containerClassName.value}
        />
      </React.Suspense>
    </ErrorBoundary>
  );
}