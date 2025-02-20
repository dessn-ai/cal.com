import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock providers that match the ones in the stack trace
const FeatureProvider = ({ children }) => <>{children}</>;
const TooltipProvider = ({ children }) => <>{children}</>;
const QueryClientProvider = ({ children }) => <>{children}</>;
const TRPCProvider = ({ children }) => <>{children}</>;
const I18nextProvider = ({ children }) => <>{children}</>;
const SessionProvider = ({ children }) => <>{children}</>;

// Mock components
const ShellMainAppDir = ({ children }) => <div>{children}</div>;
const BookingsList = () => <div>Bookings List</div>;

// Create a lazy-loaded version of the imported component to handle dynamic import
const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/(main-nav)/bookings/[status]/page')
    .catch(() => ({
      default: () => <div>Failed to load component</div>
    }))
);

// Combine all providers
const AllProviders = ({ children }) => (
  <SessionProvider>
    <I18nextProvider>
      <TRPCProvider>
        <QueryClientProvider client={{}}>
          <TooltipProvider>
            <FeatureProvider>
              {children}
            </FeatureProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </TRPCProvider>
    </I18nextProvider>
  </SessionProvider>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    status: {
      type: "dropdown",
      value: "upcoming",
      options: ["upcoming", "past", "cancelled", "unconfirmed"],
      label: "Status",
    },
  });

  const mockParams = {
    params: {
      status: state.status.value,
    },
    searchParams: {},
  };

  return (
    <AllProviders>
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent {...mockParams} />
      </Suspense>
    </AllProviders>
  );
}