import React from 'react';
import { useParentState } from "../useIframeState";

// Mock RoutingFormResponsesTable component instead of using the real one
const MockRoutingFormResponsesTable = () => {
  return (
    <div className="mock-routing-form-responses-table">
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Form Name</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Responses</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Last Response</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Sample Form</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>10</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>2023-01-01</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Another Form</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>5</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>2023-01-02</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Mock I18n Context and Provider
const I18nContext = React.createContext({
  i18n: {
    language: 'en',
    languages: ['en'],
    defaultLanguage: 'en',
    translate: (key: string) => key,
  }
});

const MockI18nProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nContext.Provider value={{
      i18n: {
        language: 'en',
        languages: ['en'],
        defaultLanguage: 'en',
        translate: (key: string) => key,
      }
    }}>
      {children}
    </I18nContext.Provider>
  );
};

// Mock InsightsProvider since we can't access the real one
const MockInsightsContext = React.createContext({});

const MockInsightsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MockInsightsContext.Provider value={{}}>
      {children}
    </MockInsightsContext.Provider>
  );
};

// Mock TRPCProvider
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <MockI18nProvider>
      <MockTRPCProvider>
        <MockInsightsProvider>
          <MockRoutingFormResponsesTable />
        </MockInsightsProvider>
      </MockTRPCProvider>
    </MockI18nProvider>
  );
}