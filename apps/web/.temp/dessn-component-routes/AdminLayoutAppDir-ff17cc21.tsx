import React from 'react';
import { useParentState } from '../useIframeState';

// Create a simplified mock version of the layout component
const MockLayout = ({ 
  children, 
  userRole 
}: { 
  children: React.ReactNode;
  userRole: string;
}) => {
  return (
    <div className="mock-admin-layout">
      <div className="mock-header">
        <h1>Admin Layout (Preview Mode)</h1>
        <div>User Role: {userRole}</div>
      </div>
      <div className="mock-content">
        {children}
      </div>
      <div className="mock-footer">
        Preview Footer
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Content</div>",
      label: "Children",
    },
    userRole: {
      type: "dropdown",
      value: "ADMIN",
      options: ["ADMIN", "OWNER", "MEMBER", "INACTIVE_ADMIN"],
      label: "User Role",
    },
  });

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <MockLayout
          userRole={state.userRole.value}
        >
          <div dangerouslySetInnerHTML={{ __html: state.children.value }} />
        </MockLayout>
      </ErrorBoundary>
    </React.Suspense>
  );
}

// Error boundary component to catch any runtime errors
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please check the console for more details.</div>;
    }

    return this.props.children;
  }
}