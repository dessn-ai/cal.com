import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamsCTA } from '../../modules/teams/teams-view';

import { TRPCProvider } from '@calcom/trpc/react';
import { I18nLanguageHandler } from '@calcom/features/i18n';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOrgAdmin: {
      type: "boolean",
      value: true,
      label: "Is Organization Admin",
    },
    organizationId: {
      type: "number",
      value: 1,
      label: "Organization ID",
    },
  });

  const mockTrpcQuery = () => ({
    organizationId: state.organizationId.value,
    organization: { isOrgAdmin: state.isOrgAdmin.value },
  });

  return (
    <TRPCProvider>
      <I18nLanguageHandler>
        <TeamsCTA />
      </I18nLanguageHandler>
    </TRPCProvider>
  );
}