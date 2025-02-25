import React from 'react';
import { useParentState } from '../useIframeState';
import { ListLinkItem } from '../../../../packages/ui/components/list/List';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    href: {
      type: "string",
      value: "/example-link",
      label: "Link URL",
    },
    heading: {
      type: "string",
      value: "Example Heading",
      label: "Heading",
    },
    subHeading: {
      type: "string",
      value: "This is an example sub-heading for the ListLinkItem component.",
      label: "Sub-heading",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <ListLinkItem
      href={state.href.value}
      heading={state.heading.value}
      subHeading={state.subHeading.value}
      disabled={state.disabled.value}
    />
  );
}