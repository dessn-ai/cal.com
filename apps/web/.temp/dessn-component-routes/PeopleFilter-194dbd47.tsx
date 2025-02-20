import React from 'react';
import { useParentState } from '../useIframeState';
import { PeopleFilter } from '@calcom/features/bookings/components/PeopleFilter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18next
i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Add any required translations here
          "search.placeholder": "Search",
          "select": "Select",
          "user_select": "Select a user",
          // Add other translations as needed
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }));

  // Mock session data
  const mockSession = {
    user: {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
    },
    expires: new Date().toISOString(),
  };

  return (
    <SessionProvider session={mockSession}>
      <I18nextProvider i18n={i18next}>
        <QueryClientProvider client={queryClient}>
          <div className="w-full">
            <PeopleFilter />
          </div>
        </QueryClientProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}