import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(admin-layout)/admin/users/[id]/edit/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "1" }),
      label: "Params",
    },
  });

  const params = JSON.parse(state.params.value);

  return <ImportedComponent params={params} />;
}