import React from 'react';
import { useParentState } from '../useIframeState';
import { InfoBadge } from '../../../../packages/ui/components/badge/InfoBadge';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "This is some informational content",
      label: "Content",
    },
  });

  return <InfoBadge content={state.content.value} />;
}