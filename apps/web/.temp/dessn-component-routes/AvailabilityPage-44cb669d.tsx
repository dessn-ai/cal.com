import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/availability/availability-view';

import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currentOrg: {
      type: 'dropdown',
      value: 'null',
      options: ['null', 'orgObject'],
      label: 'Current Organization',
    },
  });

  const currentOrg = state.currentOrg.value === 'null' ? null : {
    isOrganization: true,
    isPrivate: true,
    user: {
      role: MembershipRole.ADMIN,
    },
  };

  return <ImportedComponent currentOrg={currentOrg} />;
}