import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/apps/categories/categories-view';

import { DehydratedState } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    categories: {
      type: "string",
      value: JSON.stringify([
        { name: "Calendar", count: 5 },
        { name: "Communication", count: 3 },
        { name: "Productivity", count: 7 },
        { name: "Analytics", count: 2 },
        { name: "Integration", count: 4 }
      ]),
      label: "Categories",
    },
  });

  const parsedCategories = JSON.parse(state.categories.value);

  // Mock DehydratedState
  const mockTrpcState: DehydratedState = {
    mutations: [],
    queries: []
  };

  return (
    <ImportedComponent
      categories={parsedCategories}
      trpcState={mockTrpcState}
    />
  );
}