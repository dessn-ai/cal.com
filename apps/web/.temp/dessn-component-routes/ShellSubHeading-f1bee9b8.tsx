import React from 'react';
import { useParentState } from '../useIframeState';
import { ShellSubHeading } from '../../../../packages/ui/components/layout/ShellSubHeading';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Sample Title",
      label: "Title",
    },
    subtitle: {
      type: "string",
      value: "Sample Subtitle",
      label: "Subtitle",
    },
    actions: {
      type: "string",
      value: "Sample Actions",
      label: "Actions",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <ShellSubHeading
      title={state.title.value}
      subtitle={state.subtitle.value}
      actions={state.actions.value}
      className={state.className.value}
    />
  );
}