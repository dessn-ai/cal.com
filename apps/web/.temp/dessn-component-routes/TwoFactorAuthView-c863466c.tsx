import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/security/two-factor-auth-view';

import { trpc } from "@calcom/trpc/react";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    twoFactorEnabled: {
      type: "boolean",
      value: false,
      label: "Two Factor Enabled",
    },
    identityProvider: {
      type: "dropdown",
      value: "CAL",
      options: ["CAL", "GOOGLE", "SAML"],
      label: "Identity Provider",
    },
    passwordAdded: {
      type: "boolean",
      value: false,
      label: "Password Added",
    },
  });

  // Mock trpc.viewer.me.useQuery
  trpc.viewer.me.useQuery = () => ({
    data: {
      twoFactorEnabled: state.twoFactorEnabled.value,
      identityProvider: state.identityProvider.value,
      passwordAdded: state.passwordAdded.value,
    },
    isPending: false,
  });

  // Mock trpc.useUtils
  trpc.useUtils = () => ({
    viewer: {
      me: {
        invalidate: () => {},
      },
    },
  });

  return <ImportedComponent />;
}