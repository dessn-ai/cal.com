import React from 'react';
import { useParentState } from '../useIframeState';
import { createHydrateClient } from '../../app/_trpc/createHydrateClient';
import { DehydratedState } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    transformer: {
      type: 'string',
      value: JSON.stringify({
        serialize: (data: any) => JSON.stringify(data),
        deserialize: (data: any) => JSON.parse(data),
      }),
      label: 'Data Transformer',
    },
  });

  // Create the transformer object directly instead of parsing from string
  const transformer = {
    serialize: (data: any) => data,
    deserialize: (data: any) => data,
  };

  const HydrateClient = createHydrateClient({ transformer });

  const mockDehydratedState: DehydratedState = {
    mutations: [],
    queries: [],
  };

  return (
    <HydrateClient state={mockDehydratedState}>
      <div>Hydrated Content</div>
    </HydrateClient>
  );
}