import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryCell } from '../../../../packages/trpc/components/QueryCell';

import { UseQueryResult } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    query: {
      type: 'object',
      value: {} as UseQueryResult<any, any>,
      label: 'Query',
    },
    customLoader: {
      type: 'string',
      value: '',
      label: 'Custom Loader',
    },
    error: {
      type: 'string',
      value: '',
      label: 'Error Message',
    },
    loading: {
      type: 'string',
      value: '',
      label: 'Loading Message',
    },
    success: {
      type: 'string',
      value: '',
      label: 'Success Message',
    },
    empty: {
      type: 'string',
      value: '',
      label: 'Empty Message',
    },
  });

  return (
    <QueryCell
      query={state.query.value}
      customLoader={state.customLoader.value ? <div>{state.customLoader.value}</div> : undefined}
      error={() => (state.error.value ? <div>{state.error.value}</div> : null)}
      loading={() => (state.loading.value ? <div>{state.loading.value}</div> : null)}
      success={() => (state.success.value ? <div>{state.success.value}</div> : null)}
      empty={() => (state.empty.value ? <div>{state.empty.value}</div> : null)}
    />
  );
}