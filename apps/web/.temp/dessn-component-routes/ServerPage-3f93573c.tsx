import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/apps/categories/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ category: "calendar" }),
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

  return <ImportedComponent {...pageProps} />;
}