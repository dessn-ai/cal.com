import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/upgrade/upgrade-view';

import { TRPCProvider } from '@calcom/trpc/react';
import { I18nLanguageHandler } from '@calcom/features/i18n';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    doesUserHaveOrgToUpgrade: {
      type: 'boolean',
      value: true,
      label: 'User Has Org To Upgrade',
    },
  });

  const mockTrpc = {
    viewer: {
      organizations: {
        checkIfOrgNeedsUpgrade: {
          useQuery: () => ({
            data: state.doesUserHaveOrgToUpgrade.value,
          }),
        },
        publish: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
      },
    },
  };

  return (
    <TRPCProvider>
      <I18nLanguageHandler>
        <ImportedComponent />
      </I18nLanguageHandler>
    </TRPCProvider>
  );
}