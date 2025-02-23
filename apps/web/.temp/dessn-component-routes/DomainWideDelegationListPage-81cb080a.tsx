import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/domainWideDelegation';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Add any props here if needed
  });

  // Mock the trpc hooks
  const mockTrpc = {
    useContext: () => ({}),
    viewer: {
      domainWideDelegation: {
        list: {
          useQuery: () => ({
            data: [],
            isLoading: false,
            error: null,
          }),
        },
        update: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
        toggleEnabled: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
        add: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
        delete: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
        listWorkspacePlatforms: {
          useQuery: () => ({
            data: [],
            isLoading: false,
          }),
        },
      },
    },
  };

  // Mock the useLocale hook
  const mockUseLocale = () => ({
    t: (key: string) => key,
  });

  // Create a mock context with the required hooks
  const MockContext = React.createContext({
    trpc: mockTrpc,
    useLocale: mockUseLocale,
  });

  return (
    <MockContext.Provider value={{ trpc: mockTrpc, useLocale: mockUseLocale }}>
      <ImportedComponent />
    </MockContext.Provider>
  );
}