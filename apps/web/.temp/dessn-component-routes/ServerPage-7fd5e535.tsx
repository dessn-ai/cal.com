import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/[user]/[type]/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ user: "johndoe", type: "meeting" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ date: "2023-06-01" }),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return <ImportedComponent params={params} searchParams={searchParams} />;
}