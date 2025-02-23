import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/insights/layout';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Content</div>",
      label: "Children",
    },
  });

  return (
    <ImportedComponent>
      <div dangerouslySetInnerHTML={{ __html: state.children.value }} />
    </ImportedComponent>
  );
}