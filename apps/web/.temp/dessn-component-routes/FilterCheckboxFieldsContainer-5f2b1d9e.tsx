import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterCheckboxFieldsContainer } from '../../../../packages/features/filters/components/TeamsFilter';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Child content</div>",
      label: "Children"
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    }
  });

  return (
    <FilterCheckboxFieldsContainer
      children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
      className={state.className.value}
    />
  );
}