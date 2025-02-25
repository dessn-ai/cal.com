import React from 'react';
import { useParentState } from '../useIframeState';
import { ArrowButton } from '../../../../packages/ui/components/arrow-button/ArrowButton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    arrowDirection: {
      type: "dropdown",
      value: "up",
      options: ["up", "down"],
      label: "Arrow Direction",
    },
  });

  const handleClick = () => {
    console.log("Arrow button clicked");
  };

  return (
    <div className="relative h-20 w-20">
      <ArrowButton
        arrowDirection={state.arrowDirection.value as "up" | "down"}
        onClick={handleClick}
      />
    </div>
  );
}