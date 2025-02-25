import React from 'react';
import { useParentState } from '../useIframeState';
import { StepCard } from '../../../../packages/ui/components/card/StepCard';

export default function ComponentPreview() {
  try {
    const [state, setState] = useParentState({
      children: {
        type: "string",
        value: "This is a sample content for the StepCard",
        label: "Card Content",
      },
    });

    return (
      <React.StrictMode>
        <StepCard>
          {state.children.value}
        </StepCard>
      </React.StrictMode>
    );
  } catch (error) {
    // Fallback content if state management fails
    return (
      <StepCard>
        Default StepCard Content
      </StepCard>
    );
  }
}