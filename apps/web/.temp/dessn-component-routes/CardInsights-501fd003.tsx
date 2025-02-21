import React from 'react';
import { useParentState } from '../useIframeState';
import { CardInsights } from '../../../../packages/features/insights/components/Card';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <CardInsights className={state.className.value}>
      <p>This is the content inside the CardInsights component.</p>
    </CardInsights>
  );
}