import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/integrations/SubHeadingTitleWithConnections';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Integration Title",
      label: "Title",
    },
    numConnections: {
      type: "number",
      value: 3,
      label: "Number of Connections",
    },
  });

  return (
    <ImportedComponent
      title={state.title.value}
      numConnections={state.numConnections.value}
    />
  );
}