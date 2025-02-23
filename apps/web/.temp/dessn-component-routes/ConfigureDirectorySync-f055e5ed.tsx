import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/components/ConfigureDirectorySync';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    organizationId: {
      type: "number",
      value: 1,
      label: "Organization ID",
    },
  });

  return <ImportedComponent organizationId={state.organizationId.value} />;
}