import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/bookings/UnconfirmedBookingBadge';

// Create a mock trpc object
const mockTrpcHook = {
  data: 5,
  isLoading: false,
  error: null,
};

// Override the imported component to inject our mocks
const ComponentWithMocks = (props: any) => {
  // Mock the trpc hook
  const mockedTrpc = {
    viewer: {
      bookingUnconfirmedCount: {
        useQuery: () => mockTrpcHook
      }
    }
  };

  // Create a mocked context with our mock values
  const MockProvider = ({ children }: { children: React.ReactNode }) => {
    return React.createElement(
      React.Fragment,
      {},
      React.cloneElement(children as React.ReactElement, {
        trpc: mockedTrpc,
      })
    );
  };

  return (
    <MockProvider>
      <ImportedComponent {...props} />
    </MockProvider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    unconfirmedBookingCount: {
      type: "number",
      value: 5,
      label: "Unconfirmed Booking Count",
    },
  });

  // Mock useLocale
  React.useEffect(() => {
    if (ComponentWithMocks) {
      (ComponentWithMocks as any).useLocale = () => ({
        t: (key: string) => key,
      });
    }
  }, []);

  return <ComponentWithMocks />;
}