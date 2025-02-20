import React from 'react';
import { useParentState } from '../useIframeState';
import { CtaRow } from '../../modules/settings/billing/billing-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "View and manage billing details",
      label: "Title",
    },
    description: {
      type: "string",
      value: "View and edit your billing details",
      label: "Description",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <CtaRow
      title={state.title.value}
      description={state.description.value}
      className={state.className.value}
    >
      <button>Sample Button</button>
    </CtaRow>
  );
}