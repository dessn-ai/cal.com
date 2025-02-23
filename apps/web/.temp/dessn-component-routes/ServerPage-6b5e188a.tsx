import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock the required components and utilities
const mockT = (key: string) => key;

const MockPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="mock-page-wrapper">{children}</div>;
};

const NotFound = ({ t, headers }: { t: any; headers: any }) => {
  return (
    <div className="bg-default min-h-screen px-4" data-testid="404-page">
      <main className="mx-auto max-w-xl pb-6 pt-16 sm:pt-24">
        <div className="text-center">
          <p className="text-emphasis text-sm font-semibold uppercase tracking-wide">{t("error_404")}</p>
          <h1 className="font-cal text-emphasis mt-2 text-4xl font-extrabold sm:text-5xl">
            {t("page_doesnt_exist")}
          </h1>
          <span className="mt-2 inline-block text-lg">{t("check_spelling_mistakes_or_go_back")}</span>
        </div>
      </main>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    pathname: {
      type: "string",
      value: "/example-path",
      label: "Pathname",
    },
    host: {
      type: "string",
      value: "example.com",
      label: "Host",
    },
    isInsights: {
      type: "boolean",
      value: false,
      label: "Is Insights Page",
    },
  });

  const mockHeaders = new Map();
  mockHeaders.set('x-pathname', state.pathname.value);
  mockHeaders.set('x-forwarded-host', state.host.value);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockPageWrapper>
        <NotFound 
          t={mockT} 
          headers={{
            get: (key: string) => mockHeaders.get(key)
          }} 
        />
      </MockPageWrapper>
    </Suspense>
  );
}