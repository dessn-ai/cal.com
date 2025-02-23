import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTableToolbar } from '../../../../packages/features/data-table/components/DataTableToolbar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <div className={state.className.value}>
      <DataTableToolbar.Root>
        {/* Show just the CTA part which doesn't depend on context */}
        <DataTableToolbar.CTA>Action</DataTableToolbar.CTA>
      </DataTableToolbar.Root>
    </div>
  );
}