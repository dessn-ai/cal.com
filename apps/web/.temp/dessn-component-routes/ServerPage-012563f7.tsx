import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/(main-nav)/teams/page';

import { ShellMainAppDir } from "app/(use-page-wrapper)/(main-nav)/ShellMainAppDir";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({}),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ token: "example-token" }),
      label: "Search Params",
    },
  });

  const props = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  // Mock the necessary Next.js and server-side functions
  const mockRedirect = () => {};
  const mockGetServerSession = async () => ({ user: { name: "Test User" } });
  const mockGetTranslate = async () => (key: string) => key;

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent {...props} />
    </React.Suspense>
  );
}