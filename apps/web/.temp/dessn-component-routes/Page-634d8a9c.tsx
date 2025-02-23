import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock crypto module
const mockCrypto = {
  randomBytes: (size: number) => ({
    toString: () => 'mock-nonce-' + Math.random().toString(36).substring(2)
  })
};

// Mock the crypto module globally
if (typeof window !== 'undefined') {
  (window as any).crypto = {
    ...window.crypto,
    randomBytes: mockCrypto.randomBytes
  };
}

// Mock the Node.js crypto module
jest.mock('crypto', () => ({
  randomBytes: (size: number) => ({
    toString: () => 'mock-nonce-' + Math.random().toString(36).substring(2)
  })
}));

// Import the component directly instead of using dynamic import
import ImportedComponent from '../../app/(use-page-wrapper)/insights/page';

// Mock provider components
const MockProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockProvider>
        <div style={{ padding: '20px' }}>
          <ErrorBoundary>
            <ImportedComponent />
          </ErrorBoundary>
        </div>
      </MockProvider>
    </Suspense>
  );
}

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          Something went wrong loading the component.
        </div>
      );
    }

    return this.props.children;
  }
}

// Mock the generateNonce function
(window as any).generateNonce = () => {
  return mockCrypto.randomBytes(16).toString('hex');
};