import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/app/router';

// Add ErrorBoundary type
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    form: {
      type: "string",
      value: JSON.stringify({
        name: "Sample Form",
        user: {
          metadata: {},
          id: 1,
          email: "user@example.com",
          username: "sampleuser",
          movedToProfileId: null,
          organization: { slug: "sample-org" },
          nonProfileUsername: null,
          profile: {
            organization: { slug: "sample-org" }
          }
        },
        team: {
          slug: "sample-team",
          metadata: {},
          parentId: null,
          parent: null
        },
        description: "A sample form description",
        id: "sample-id",
        settings: {},
        disabled: false,
        position: 1,
        fields: {},
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        teamId: null,
        routes: {},
        updatedById: null
      }),
      label: "Form Data"
    },
    message: {
      type: "string",
      value: "This is a sample message",
      label: "Message"
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed"
    }
  });

  let parsedForm;
  try {
    parsedForm = JSON.parse(state.form.value);
  } catch (error) {
    console.error('Failed to parse form data:', error);
    parsedForm = {};
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent
          form={parsedForm}
          message={state.message.value}
          isEmbed={state.isEmbed.value}
        />
      </ErrorBoundary>
    </Suspense>
  );
}