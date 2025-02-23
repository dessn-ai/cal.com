import React from 'react';
import { useParentState } from '../useIframeState';
import { BreadcrumbItem } from '../../../../packages/ui/components/breadcrumb/Breadcrumb';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Home",
      label: "Children",
    },
    href: {
      type: "string",
      value: "/",
      label: "Href",
    },
  });

  return (
    <BreadcrumbItem
      href={state.href.value}
    >
      {state.children.value}
    </BreadcrumbItem>
  );
}