import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/layout';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Content</div>",
      label: "Children",
    },
    containerClassName: {
      type: "string",
      value: "container-class",
      label: "Container Class Name",
    },
  });

  return (
    <ImportedComponent
      children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
      containerClassName={state.containerClassName.value}
    />
  );
}