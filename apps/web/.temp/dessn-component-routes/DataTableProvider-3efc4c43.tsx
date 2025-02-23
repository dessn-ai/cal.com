import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTableProvider } from '../../../../packages/features/data-table/lib/context';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Child Content</div>",
      label: "Children",
    },
  });

  return (
    <DataTableProvider>
      {React.createElement('div', {
        dangerouslySetInnerHTML: { __html: state.children.value },
      })}
    </DataTableProvider>
  );
}