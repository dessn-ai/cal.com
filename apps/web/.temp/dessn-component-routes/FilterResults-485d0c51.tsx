import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterResults } from '../../../../packages/features/filters/components/FilterResults';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    totalCount: {
      type: "number",
      value: 10,
      label: "Total Count",
    },
    filteredCount: {
      type: "number",
      value: 5,
      label: "Filtered Count",
    },
  });

  const queryRes = {
    isPending: state.isPending.value,
    data: {
      totalCount: state.totalCount.value,
      filtered: Array(state.filteredCount.value).fill({}),
    },
  };

  const SkeletonLoader = () => <div>Loading...</div>;
  const NoResultsScreen = () => <div>No results found</div>;
  const EmptyScreen = () => <div>No data available</div>;

  return (
    <FilterResults
      queryRes={queryRes}
      SkeletonLoader={SkeletonLoader}
      noResultsScreen={<NoResultsScreen />}
      emptyScreen={<EmptyScreen />}
    >
      <div>Filtered Results: {state.filteredCount.value}</div>
    </FilterResults>
  );
}