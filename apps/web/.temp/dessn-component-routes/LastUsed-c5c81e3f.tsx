import React from 'react';
import { useParentState } from '../useIframeState';
import { LastUsed } from '../../../../packages/lib/hooks/useLastUsed';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <LastUsed className={state.className.value} />
  );
}