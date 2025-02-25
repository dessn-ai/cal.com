import React from 'react';
import { useParentState } from '../useIframeState';
import { StepHeader } from '../../components/apps/installation/StepHeader';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Installation Steps",
      label: "Title",
    },
    subtitle: {
      type: "string",
      value: "Follow these steps to install the app",
      label: "Subtitle",
    },
  });

  return (
    <StepHeader
      title={state.title.value}
      subtitle={state.subtitle.value}
    >
      <p>Additional content can be added here</p>
    </StepHeader>
  );
}