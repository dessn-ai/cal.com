import React, { Component } from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/d/[link]/d-type-view';

// Mock crypto for browser environment
if (typeof window !== 'undefined' && !window.crypto) {
  window.crypto = {
    getRandomValues: function(buffer) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] = Math.floor(Math.random() * 256);
      }
      return buffer;
    }
  };
}

// Error boundary to catch crypto-related errors
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please check the console for details.</div>;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "example-event",
      label: "Slug",
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
    user: {
      type: "string",
      value: "johndoe",
      label: "User",
    },
    isBrandingHidden: {
      type: "boolean",
      value: false,
      label: "Is Branding Hidden",
    },
    isTeamEvent: {
      type: "boolean",
      value: false,
      label: "Is Team Event",
    },
    duration: {
      type: "number",
      value: 60,
      label: "Duration",
    },
    hashedLink: {
      type: "string",
      value: "abc123",
      label: "Hashed Link",
    },
  });

  // Mock objects for complex props
  const mockBooking = {};
  const mockEntity = {};
  const mockDurationConfig = {};

  return (
    <ErrorBoundary>
      <ImportedComponent
        slug={state.slug.value}
        isEmbed={state.isEmbed.value}
        user={state.user.value}
        booking={mockBooking}
        isBrandingHidden={state.isBrandingHidden.value}
        isTeamEvent={state.isTeamEvent.value}
        entity={mockEntity}
        duration={state.duration.value}
        hashedLink={state.hashedLink.value}
        durationConfig={mockDurationConfig}
      />
    </ErrorBoundary>
  );
}