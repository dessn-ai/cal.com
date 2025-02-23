import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterToggle } from '../../../../packages/features/bookings/components/FilterToggle';

import { useFilterQuery } from '@calcom/features/bookings/lib/useFilterQuery';
import { useLocale } from '@calcom/lib/hooks/useLocale';

// Mock the useFilterQuery hook
const mockUseFilterQuery = () => ({
  data: {
    teamIds: null,
    userIds: null,
    eventTypeIds: null,
  },
});

// Mock the useLocale hook
const mockUseLocale = () => ({
  t: (key: string) => key,
});

// Override the actual hooks with mocked versions
jest.mock('@calcom/features/bookings/lib/useFilterQuery', () => ({
  useFilterQuery: mockUseFilterQuery,
}));

jest.mock('@calcom/lib/hooks/useLocale', () => ({
  useLocale: mockUseLocale,
}));

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