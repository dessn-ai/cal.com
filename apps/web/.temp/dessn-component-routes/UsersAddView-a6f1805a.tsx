import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';

// Mock Component
const MockUsersAddView = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Enter email"
          />
        </div>
        <button
          type="button"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Add User
        </button>
      </div>
    </div>
  );
};

// Mock session
const mockSession = {
  user: {
    id: "test-user",
    name: "Test User",
    email: "test@example.com",
  },
  expires: "2024-12-31"
};

// Initialize i18next with basic configuration
const i18n = i18next.createInstance();
i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        common: {},
        translation: {}
      }
    },
    defaultNS: 'common',
    fallbackNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock TRPC Provider
const MockTRPCProvider = ({ children }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <SessionProvider session={mockSession}>
      <I18nextProvider i18n={i18n}>
        <MockTRPCProvider>
          <QueryClientProvider client={queryClient}>
            <div className="w-full">
              <MockUsersAddView />
            </div>
          </QueryClientProvider>
        </MockTRPCProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}