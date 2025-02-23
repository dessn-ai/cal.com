import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryCell } from '../../lib/QueryCell';

import { useQuery } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    query: {
      type: "object",
      value: {
        status: "success",
        data: [{ id: 1, name: "Sample Data" }],
      },
      label: "Query Result",
    },
    customLoader: {
      type: "string",
      value: "",
      label: "Custom Loader",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    hasError: {
      type: "boolean",
      value: false,
      label: "Has Error",
    },
  });

  const mockQuery = useQuery({
    queryKey: ['mockData'],
    queryFn: () => {
      if (state.hasError.value) {
        throw new Error('Mock error');
      }
      return state.query.value.data;
    },
    enabled: !state.isLoading.value,
  });

  return (
    <QueryCell
      query={mockQuery}
      customLoader={state.customLoader.value ? <div>{state.customLoader.value}</div> : undefined}
      success={(data) => <div>Success: {JSON.stringify(data)}</div>}
      error={(error) => <div>Error: {error.error.message}</div>}
      empty={() => <div>No data available</div>}
    />
  );
}