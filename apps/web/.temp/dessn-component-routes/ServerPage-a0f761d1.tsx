import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/d/[link]/[slug]/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ link: "example-link", slug: "example-slug" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example-query" }),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return <ImportedComponent params={params} searchParams={searchParams} />;
}