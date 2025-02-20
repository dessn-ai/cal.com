import React from 'react';
import { useParentState } from '../useIframeState';
import { ButtonOrLink } from '../../../../packages/ui/components/dropdown/Dropdown';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Click me",
      label: "Button Text",
    },
    href: {
      type: "string",
      value: "https://example.com",
      label: "Link URL",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    className: {
      type: "string",
      value: "bg-blue-500 text-white px-4 py-2 rounded",
      label: "Custom Class",
    },
  });

  return (
    <ButtonOrLink
      href={state.href.value}
      disabled={state.disabled.value}
      className={state.className.value}
    >
      {state.children.value}
    </ButtonOrLink>
  );
}