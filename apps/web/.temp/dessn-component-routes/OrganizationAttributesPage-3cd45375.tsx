import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/attributes/attributes-list-view';

import { trpc } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
  });

  // Mock the trpc hook
  const mockTrpc = {
    viewer: {
      attributes: {
        list: {
          useQuery: () => ({
            data: [
              {
                id: '1',
                name: 'Attribute 1',
                type: 'TEXT',
                enabled: true,
                options: [],
                isWeightsEnabled: false,
              },
              {
                id: '2',
                name: 'Attribute 2',
                type: 'SINGLE_SELECT',
                enabled: false,
                options: ['Option 1', 'Option 2'],
                isWeightsEnabled: true,
              },
            ],
            isLoading: state.isLoading.value,
          }),
        },
        toggleActive: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
      },
    },
  };

  // @ts-ignore
  trpc.useContext = () => mockTrpc;

  return <ImportedComponent />;
}