import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock version of the UsersEditView component
const MockUsersEditView = ({ user }: { user: any }) => {
  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Edit User Profile</h1>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Name</label>
          <input 
            type="text" 
            className="px-3 py-2 border rounded-md"
            defaultValue={user.name}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input 
            type="email" 
            className="px-3 py-2 border rounded-md"
            defaultValue={user.email}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Username</label>
          <input 
            type="text" 
            className="px-3 py-2 border rounded-md"
            defaultValue={user.username}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Role</label>
          <select 
            className="px-3 py-2 border rounded-md"
            defaultValue={user.role}
          >
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Time Zone</label>
          <select 
            className="px-3 py-2 border rounded-md"
            defaultValue={user.timeZone}
          >
            <option value="UTC">UTC</option>
            <option value="America/New_York">America/New_York</option>
            <option value="Europe/London">Europe/London</option>
          </select>
        </div>
        <div className="flex justify-end space-x-4">
          <button 
            className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

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
  const [state] = useParentState({
    user: {
      type: 'object',
      value: {
        id: 1,
        username: 'johndoe',
        email: 'john@example.com',
        name: 'John Doe',
        role: 'ADMIN',
        theme: 'light',
        locale: 'en',
        timeZone: 'UTC',
        weekStart: 'Monday',
        timeFormat: 12,
        allowDynamicBooking: true,
        brandColor: '#292929',
        darkBrandColor: '#fafafa',
        createdDate: new Date().toISOString(),
        metadata: {},
        completedOnboarding: true,
        away: false,
        identityProvider: 'CAL',
        twoFactorEnabled: false,
        disableImpersonation: false,
        avatarUrl: '',
        trialEndsAt: null,
      },
      label: 'User',
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full">
        <MockUsersEditView user={state.user.value} />
      </div>
    </QueryClientProvider>
  );
}