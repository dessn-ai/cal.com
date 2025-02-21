import React from 'react';
import { useParentState } from '../useIframeState';
import { Spinner } from '../../../../packages/features/calendars/weeklyview/components/spinner/Spinner';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return <Spinner className={state.className.value} />;
}