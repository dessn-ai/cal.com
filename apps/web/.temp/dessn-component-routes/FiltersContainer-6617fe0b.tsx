import React from 'react';
import { useParentState } from '../useIframeState';
import { FiltersContainer } from '../../../../packages/features/bookings/components/FiltersContainer';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isFiltersVisible: {
      type: "boolean",
      value: true,
      label: "Is Filters Visible",
    },
  });

  return (
    <FiltersContainer isFiltersVisible={state.isFiltersVisible.value} />
  );
}