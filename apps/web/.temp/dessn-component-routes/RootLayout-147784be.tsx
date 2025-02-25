import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock Layout Component
const MockLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample child content</div>",
      label: "Children",
    },
  });

  return (
    <SessionProvider session={null}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <MockLayout>
            {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
          </MockLayout>
        </TooltipProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}