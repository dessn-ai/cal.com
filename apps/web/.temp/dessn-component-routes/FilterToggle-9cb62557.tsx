import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterToggle } from '../../../../packages/features/bookings/components/FilterToggle';

// Create mock values instead of using Jest
const mockFilterData = {
  teamIds: null,
  userIds: null,
  eventTypeIds: null,
};

// Mock modules by overriding the imports
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

  return (
    <FilterToggle setIsFiltersVisible={setIsFiltersVisible} />
  );
}