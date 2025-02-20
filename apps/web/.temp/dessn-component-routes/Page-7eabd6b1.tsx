import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components
const EventTypes = () => <div>Event Types Component</div>;
const EventTypesCTA = () => <div>Event Types CTA</div>;
const ShellMain = ({ children, heading, subtitle, CTA }) => (
  <div>
    <h1>{heading}</h1>
    <p>{subtitle}</p>
    {CTA}
    {children}
  </div>
);

// Mock implementations
const mockGetTranslate = () => (key: string) => key;
const mockHeaders = { get: () => null, set: () => null };
const mockCookies = { get: () => null, set: () => null };
const mockRedirect = () => {};
const mockGetServerSession = () => Promise.resolve({ user: { id: '1' } });
const mockBuildLegacyCtx = () => ({});
const mockSsrInit = () => Promise.resolve({});
const mockGenerateMetadata = () => ({});

// Create a mock ImportedComponent that represents the actual page component
const ImportedComponent = ({ params, searchParams }) => {
  return (
    <ShellMain heading="Event Types" subtitle="Manage your event types">
      <EventTypes />
    </ShellMain>
  );
};

// Mock modules directly
const nextHeaders = {
  headers: () => mockHeaders,
  cookies: () => mockCookies,
};

const nextNavigation = {
  redirect: mockRedirect,
};

const authLib = {
  getServerSession: mockGetServerSession,
};

const buildLegacyCtx = {
  buildLegacyCtx: mockBuildLegacyCtx,
};

const ssr = {
  ssrInit: mockSsrInit,
};

const appUtils = {
  _generateMetadata: mockGenerateMetadata,
  getTranslate: () => mockGetTranslate,
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({}),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  try {
    const mockProps = {
      params: JSON.parse(state.params.value),
      searchParams: JSON.parse(state.searchParams.value),
    };

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent {...mockProps} />
      </Suspense>
    );
  } catch (error) {
    return <div>Error rendering component: {error.message}</div>;
  }
}

// Global mocks
if (typeof window !== 'undefined') {
  window.fetch = () => Promise.resolve(new Response());
}