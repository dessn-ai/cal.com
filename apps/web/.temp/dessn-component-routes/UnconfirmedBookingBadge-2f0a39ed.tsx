import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/bookings/UnconfirmedBookingBadge';

// Create a mock component that includes the mocked dependencies
const UnconfirmedBookingBadgeWithMocks = () => {
  // Mock the trpc hook result
  const mockQueryResult = {
    data: 5,
  };

  // Mock the useLocale result
  const mockLocale = {
    t: (key: string) => key,
  };

  // Create a wrapped version of the component with mocked context
  const WrappedComponent = () => {
    // @ts-ignore - Ignore type checking for mocked properties
    ImportedComponent.useLocale = () => mockLocale;
    
    // Create a component that will receive the mocked trpc context
    return <ImportedComponent 
      // @ts-ignore - Ignore type checking for mocked properties
      _trpcQueryResult={mockQueryResult}
    />;
  };

  return <WrappedComponent />;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    unconfirmedBookingCount: {
      type: "number",
      value: 5,
      label: "Unconfirmed Booking Count",
    },
  });

  return <UnconfirmedBookingBadgeWithMocks />;
}