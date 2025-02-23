import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "common": {
          "save": "Save",
          "edit": "Edit",
          "delete": "Delete",
          "cancel": "Cancel"
        }
      }
    }
  }
});

// Create Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock Components and Providers
const Dialog = ({ children, open, onOpenChange }) => {
  if (!open) return null;
  return (
    <div className="mock-dialog">
      {children}
      <button onClick={() => onOpenChange?.(false)}>Close</button>
    </div>
  );
};

// Mock Providers
const FeatureProvider = ({ children }) => <>{children}</>;
const SessionProvider = ({ children }) => <>{children}</>;
const TooltipProvider = ({ children }) => <>{children}</>;

// Mock the UsersEditView component
const UsersEditView = ({ user }) => {
  return (
    <div className="mock-users-edit-view">
      <h1>Edit User: {user.name}</h1>
      <form>
        <div>
          <label>Name</label>
          <input type="text" defaultValue={user.name} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" defaultValue={user.email} />
        </div>
        <div>
          <label>Username</label>
          <input type="text" defaultValue={user.username} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

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
        timeZone: 'UTC',
        weekStart: 'Monday',
        theme: 'light',
        brandColor: '#292929',
        darkBrandColor: '#fafafa',
        locale: 'en',
        defaultScheduleId: 1,
        completedOnboarding: true,
        twoFactorEnabled: false,
      },
      label: 'User',
    },
  });

  return (
    <FeatureProvider>
      <SessionProvider>
        <TooltipProvider>
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18next}>
              <div className="w-full">
                <UsersEditView user={state.user.value} />
              </div>
            </I18nextProvider>
          </QueryClientProvider>
        </TooltipProvider>
      </SessionProvider>
    </FeatureProvider>
  );
}