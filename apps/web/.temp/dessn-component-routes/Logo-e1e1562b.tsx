import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/logo/Logo';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    small: {
      type: "boolean",
      value: false,
      label: "Small",
    },
    icon: {
      type: "boolean",
      value: false,
      label: "Icon",
    },
    inline: {
      type: "boolean",
      value: true,
      label: "Inline",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    src: {
      type: "string",
      value: "/api/logo",
      label: "Source",
    },
  });

  return (
    <ImportedComponent
      small={state.small.value}
      icon={state.icon.value}
      inline={state.inline.value}
      className={state.className.value}
      src={state.src.value}
    />
  );
}