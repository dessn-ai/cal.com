import React from 'react';
import { useParentState } from '../useIframeState';
import { PeopleFilter } from '../../../../packages/features/bookings/components/PeopleFilter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full">
        <PeopleFilter />
      </div>
    </QueryClientProvider>
  );
}