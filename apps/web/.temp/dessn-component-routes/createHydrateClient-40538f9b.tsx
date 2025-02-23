import React from 'react';
import { useParentState } from '../useIframeState';
import { createHydrateClient } from '../../app/_trpc/createHydrateClient';
import { DehydratedState } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    transformer: {
      type: 'string',
      value: JSON.stringify({
        serialize: "(data) => JSON.stringify(data)",
        deserialize: "(data) => JSON.parse(data)",
      }),
      label: 'Data Transformer',
    },
  });

  // Create a proper transformer object with actual functions
  const transformer = {
    serialize: (data: any) => JSON.stringify(data),
    deserialize: (data: any) => {
      // If data is already an object, return it as is
      if (typeof data === 'object' && data !== null) {
        return data;
      }
      try {
        return JSON.parse(data);
      } catch {
        return data;
      }
    },
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