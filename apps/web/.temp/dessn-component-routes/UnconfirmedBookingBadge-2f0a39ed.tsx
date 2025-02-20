import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/bookings/UnconfirmedBookingBadge';
import { trpc } from '@calcom/trpc/react';

// Create a context to override trpc
const TRPCContext = React.createContext(null);

// Mock data
const mockData = {
  data: 5,
  isLoading: false,
  error: null,
};

// Mock trpc object
const mockTrpcObj = {
  viewer: {
    bookingUnconfirmedCount: {
      useQuery: () => mockData
    }
  }
};

export default function ComponentPreview() {
  const [state] = useParentState({
    unconfirmedBookingCount: {
      type: "number",
      value: 5,
      label: "Unconfirmed Booking Count",
    },
  });

  // Mock the useLocale hook
  const mockUseLocale = () => ({
    t: (key: string) => key,
  });

  // Apply mocks to the component
  ImportedComponent.useLocale = mockUseLocale;

  // Create a wrapper component that provides the mock trpc context
  const ComponentWithMocks = () => {
    return (
      <div data-testid="unconfirmed-booking-badge">
        <TRPCContext.Provider value={mockTrpcObj}>
          <ImportedComponent />
        </TRPCContext.Provider>
      </div>
    );
  };

  return <ComponentWithMocks />;
}

// Override the trpc hook to use our context
Object.defineProperty(trpc, 'viewer', {
  get: () => mockTrpcObj.viewer,
  configurable: true
});