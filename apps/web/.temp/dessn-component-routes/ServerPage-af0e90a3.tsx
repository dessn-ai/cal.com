import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/auth/login/page';


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

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return <ImportedComponent params={params} searchParams={searchParams} />;
}