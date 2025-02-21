import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/apps/layouts/AppsLayout';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// Mock router context
const mockRouter = {
  push: () => Promise.resolve(),
  replace: () => Promise.resolve(),
  refresh: () => Promise.resolve(),
  prefetch: () => Promise.resolve(),
  back: () => Promise.resolve(),
  forward: () => Promise.resolve(),
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
  basePath: '',
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
};

// Mock search params
const searchParamsContext = new URLSearchParams();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample content</div>",
      label: "Children",
    },
    actions: {
      type: "string",
      value: "(className) => <button className={className}>Action</button>",
      label: "Actions",
    },
    emptyStore: {
      type: "boolean",
      value: false,
      label: "Empty Store",
    },
  });

  const session = useSession();
  const router = useRouter();

  const renderActions = (className: string) => {
    return <button className={className}>Action</button>;
  };

  return (
    <AppRouterContext.Provider 
      value={{
        ...mockRouter,
        searchParams: searchParamsContext
      }}
    >
      <ImportedComponent
        children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
        actions={renderActions}
        emptyStore={state.emptyStore.value}
      />
    </AppRouterContext.Provider>
  );
}