import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/breadcrumb/Breadcrumb';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<BreadcrumbItem href='/'>Home</BreadcrumbItem><BreadcrumbItem href='/products'>Products</BreadcrumbItem>",
      label: "Children",
    },
  });

  return (
    <ImportedComponent>
      {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
    </ImportedComponent>
  );
}