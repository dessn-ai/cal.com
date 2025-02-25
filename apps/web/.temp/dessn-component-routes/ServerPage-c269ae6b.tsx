import React from 'react';
import { useParentState } from "../useIframeState";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "@calcom/trpc/react";

// Mock JotaiProvider
const MockJotaiProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const queryClient = new QueryClient();

export default function ServerPage() {
  const [state, setState] = useParentState({});

  return (
    <MockJotaiProvider>
      <QueryClientProvider client={queryClient}>
        {/* Your server page content */}
      </QueryClientProvider>
    </MockJotaiProvider>
  );
}