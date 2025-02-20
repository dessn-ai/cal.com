import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR to avoid server component issues
const SignupPage = dynamic(() => import('../../app/(use-page-wrapper)/signup/page').then(mod => {
  // Handle both default and named exports
  return mod.default || mod;
}), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "example" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "test" }),
      label: "Search Params",
    },
  });

  const pageProps = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Suspense fallback={<div>Loading...</div>}>
        <SignupPage {...pageProps} />
      </Suspense>
    </div>
  );
}