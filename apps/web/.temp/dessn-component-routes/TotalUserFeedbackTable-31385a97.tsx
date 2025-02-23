import React from 'react';
import { useParentState } from '../useIframeState';
import { TotalUserFeedbackTable } from '../../../../packages/features/insights/components/TotalUserFeedbackTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Enhanced mock i18n context with common Cal.com i18n functionality
const defaultI18n = {
  language: 'en',
  languages: ['en'],
  defaultLanguage: 'en',
  t: (key: string) => key,
  changeLanguage: () => Promise.resolve(),
  exists: () => true,
  getFixedT: () => ((key: string) => key),
  i18n: {
    language: 'en',
    languages: ['en'],
    defaultLanguage: 'en',
  },
};

const I18nContext = React.createContext(defaultI18n);

// Mock i18n provider with enhanced functionality
const MockI18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = React.useState('en');

  const value = React.useMemo(() => ({
    ...defaultI18n,
    language,
    changeLanguage: (newLang: string) => {
      setLanguage(newLang);
      return Promise.resolve();
    },
    t: (key: string, params?: Record<string, any>) => {
      if (params) {
        let result = key;
        Object.entries(params).forEach(([paramKey, paramValue]) => {
          result = result.replace(`{{${paramKey}}}`, String(paramValue));
        });
        return result;
      }
      return key;
    },
  }), [language]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

// Mock Insights Context
const InsightsContext = React.createContext({
  dateRange: {
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    endDate: new Date(),
  },
  setDateRange: () => {},
  loading: false,
  setLoading: () => {},
});

const MockInsightsProvider = ({ children }: { children: React.ReactNode }) => {
  const [dateRange, setDateRange] = React.useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    endDate: new Date(),
  });
  const [loading, setLoading] = React.useState(false);

  return (
    <InsightsContext.Provider
      value={{
        dateRange,
        setDateRange,
        loading,
        setLoading,
      }}>
      {children}
    </InsightsContext.Provider>
  );
};

// Create a client
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
    data: {
      type: "string",
      value: JSON.stringify([
        {
          userId: 1,
          user: {
            name: "John Doe",
            avatarUrl: "https://example.com/avatar1.jpg"
          },
          emailMd5: "abc123",
          count: 5,
          averageRating: 4.5,
          username: "johndoe"
        },
        {
          userId: 2,
          user: {
            name: "Jane Smith",
            avatarUrl: "https://example.com/avatar2.jpg"
          },
          emailMd5: "def456",
          count: 3,
          averageRating: 4.0,
          username: "janesmith"
        }
      ]),
      label: "Table Data"
    }
  });

  const parsedData = React.useMemo(() => {
    try {
      return JSON.parse(state.data.value);
    } catch (error) {
      console.error("Failed to parse data:", error);
      return undefined;
    }
  }, [state.data.value]);

  return (
    <QueryClientProvider client={queryClient}>
      <MockI18nProvider>
        <MockInsightsProvider>
          <TotalUserFeedbackTable data={parsedData} />
        </MockInsightsProvider>
      </MockI18nProvider>
    </QueryClientProvider>
  );
}