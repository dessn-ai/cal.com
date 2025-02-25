import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterToggle } from '../../../../packages/features/bookings/components/FilterToggle';

// Create mock data and functions directly
const mockFilterData = {
  teamIds: null,
  userIds: null,
  eventTypeIds: null,
};

// Override the actual hooks with local mock implementations
const useFilterQuery = () => ({
  data: mockFilterData
});

const useLocale = () => ({
  t: (key: string) => key
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isFiltersVisible: {
      type: "boolean",
      value: false,
      label: "Is Filters Visible",
    },
  });

  const setIsFiltersVisible = (value: boolean | ((prevState: boolean) => boolean)) => {
    if (typeof value === 'function') {
      setState('isFiltersVisible', value(state.isFiltersVisible.value));
    } else {
      setState('isFiltersVisible', value);
    }
  };

  // Provide the mocked hooks through props
  return (
    <FilterToggle 
      setIsFiltersVisible={setIsFiltersVisible}
      useFilterQuery={useFilterQuery}
      useLocale={useLocale}
    />
  );
}