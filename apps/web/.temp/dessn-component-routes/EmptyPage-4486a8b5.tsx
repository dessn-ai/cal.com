import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/EmptyPage';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "John Doe",
      label: "Name",
    },
  });

  return <ImportedComponent name={state.name.value} />;
}