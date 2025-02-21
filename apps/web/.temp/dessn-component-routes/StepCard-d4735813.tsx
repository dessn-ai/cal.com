import React from 'react';
import { useParentState } from '../useIframeState';
import { StepCard } from '../../../../packages/ui/components/card/StepCard';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "This is a sample content for the StepCard",
      label: "Card Content",
    },
  });

  return (
    <StepCard>
      {state.children.value}
    </StepCard>
  );
}