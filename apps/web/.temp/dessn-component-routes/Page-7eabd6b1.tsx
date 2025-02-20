import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/(main-nav)/event-types/page';

import { ShellMainAppDir } from '../../app/(use-page-wrapper)/(main-nav)/ShellMainAppDir';

// Mock components and functions
const EventTypes = () => <div>Event Types Component</div>;
const EventTypesCTA = () => <div>Event Types CTA</div>;

const mockGetTranslate = () => (key: string) => key;

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

  const mockProps = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent {...mockProps} />
    </React.Suspense>
  );
}

// Mock the necessary modules
jest.mock('next/headers', () => ({
  headers: () => ({}),
  cookies: () => ({}),
}));

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

jest.mock('@calcom/features/auth/lib/getServerSession', () => ({
  getServerSession: jest.fn(() => Promise.resolve({ user: { id: '1' } })),
}));

jest.mock('@lib/buildLegacyCtx', () => ({
  buildLegacyCtx: jest.fn(),
}));

jest.mock('@server/lib/ssr', () => ({
  ssrInit: jest.fn(),
}));

jest.mock('app/_utils', () => ({
  _generateMetadata: jest.fn(),
  getTranslate: () => mockGetTranslate,
}));

jest.mock('app/(use-page-wrapper)/(main-nav)/ShellMainAppDir', () => ({
  ShellMainAppDir: ({ children, heading, subtitle, CTA }) => (
    <div>
      <h1>{heading}</h1>
      <p>{subtitle}</p>
      {CTA}
      {children}
    </div>
  ),
}));

jest.mock('~/event-types/views/event-types-listing-view', () => ({
  __esModule: true,
  default: EventTypes,
  EventTypesCTA: EventTypesCTA,
}));