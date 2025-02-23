import React from 'react';
import { useParentState } from '../useIframeState';
import { GoogleTagManagerComponent } from '../../components/GTM';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mockIsUS: {
      type: "boolean",
      value: true,
      label: "Mock US Geolocation",
    },
    mockGTMID: {
      type: "string",
      value: "GTM-XXXXXXX",
      label: "Mock GTM ID",
    },
  });

  // Mock the environment variable
  process.env.NEXT_PUBLIC_GTM_ID = state.mockGTMID.value;

  // Mock the useGeolocation hook
  const mockUseGeolocation = () => ({
    isUS: state.mockIsUS.value,
    loading: false,
    error: null,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleTagManagerComponent />
    </QueryClientProvider>
  );
}