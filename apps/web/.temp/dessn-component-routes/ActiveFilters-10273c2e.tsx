import React from 'react';
import { useParentState } from '../useIframeState';
import { ActiveFilters } from '../../../../packages/features/data-table/components/filters/ActiveFilters';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: 'object',
      value: {},
      label: 'Table',
    },
  });

  return <ActiveFilters table={state.table.value} />;
}