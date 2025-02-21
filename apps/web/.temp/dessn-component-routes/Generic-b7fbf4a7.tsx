import React from 'react';
import { useParentState } from '../useIframeState';
import { Generic } from '../../../../packages/lib/OgImages';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Welcome to Cal.com",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Scheduling infrastructure for absolutely everyone.",
      label: "Description",
    },
  });

  return (
    <Generic
      title={state.title.value}
      description={state.description.value}
    />
  );
}