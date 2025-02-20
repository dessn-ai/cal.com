import React from 'react';
import { useParentState } from '../useIframeState';
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock providers
const MockTRPCProvider = ({ children }) => children;
const MockFeatureProvider = ({ children }) => children;

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock the layout component
const MockLayoutComponent = ({ children, containerClassName }) => {
  return (
    <div className={containerClassName}>
      {children}
    </div>
  );
};

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Failed to load component preview</div>;
    }
    return this.props.children;
  }
}

// Generate a random hex string using Web Crypto API
const generateRandomHex = (size) => {
  const arr = new Uint8Array(size);
  if (typeof window !== 'undefined') {
    window.crypto.getRandomValues(arr);
  }
  return Array.from(arr)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

// Set up global mocks and environment
if (typeof window !== 'undefined') {
  // Mock generateNonce without modifying crypto
  Object.defineProperty(window, 'generateNonce', {
    value: () => generateRandomHex(16),
    writable: true,
    configurable: true
  });

  // Set up environment variables
  window.ENV = window.ENV || {
    NEXT_PUBLIC_WEBAPP_URL: 'http://localhost:3000',
    NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
  };
}

// Mock the Node.js crypto module for SSR
const mockCrypto = {
  randomBytes: (size) => ({
    toString: () => generateRandomHex(size)
  })
};

// Export the mock for SSR
if (typeof window === 'undefined') {
  global.crypto = {
    getRandomValues: (arr) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 256);
      }
      return arr;
    }
  };
}

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

  // Initialize mocks on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined' && !window.generateNonce) {
      window.generateNonce = () => generateRandomHex(16);
    }
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <MockTRPCProvider>
            <MockFeatureProvider>
              <MockLayoutComponent
                children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
                containerClassName={state.containerClassName.value}
              />
            </MockFeatureProvider>
          </MockTRPCProvider>
        </SessionProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

// Mock the module that uses crypto
if (import.meta.env.SSR) {
  module.exports = {
    generateNonce: () => generateRandomHex(16),
    crypto: mockCrypto
  };
}