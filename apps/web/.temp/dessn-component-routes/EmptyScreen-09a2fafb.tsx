import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/components/EmptyScreen';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isFilteredView: {
      type: "boolean",
      value: false,
      label: "Is Filtered View",
    },
  });

  return <ImportedComponent isFilteredView={state.isFilteredView.value} />;
}