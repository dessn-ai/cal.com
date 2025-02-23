import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
      staleTime: 0,
    },
  },
});

// Simple Dialog component
const Dialog = ({
  open,
  onOpenChange,
  children
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={() => onOpenChange(false)}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
          {children}
        </div>
      </div>
    </div>
  );
};

// Mock CreateTeamDialog component
const MockCreateTeamDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="p-6">
        <h2 className="text-xl font-bold leading-6 text-gray-900">Create a New Team</h2>
        <div className="mt-4">
          <form className="space-y-4">
            <div>
              <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">
                Team Name
              </label>
              <input
                type="text"
                id="teamName"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-neutral-500 sm:text-sm"
                placeholder="Team Name"
              />
            </div>
            <div>
              <label htmlFor="teamSlug" className="block text-sm font-medium text-gray-700">
                Team URL Slug
              </label>
              <input
                type="text"
                id="teamSlug"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-neutral-500 sm:text-sm"
                placeholder="team-url"
              />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Create Team
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
  });

  const handleOpenChange = (open: boolean) => {
    setState('open', open);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-white">
        <MockCreateTeamDialog 
          open={state.open.value} 
          onOpenChange={handleOpenChange}
        />
      </div>
    </QueryClientProvider>
  );
}