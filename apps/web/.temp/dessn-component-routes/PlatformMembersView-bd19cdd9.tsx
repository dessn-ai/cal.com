import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/platform/pages/settings/members';

import { trpc } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPlatformUser: {
      type: "boolean",
      value: true,
      label: "Is Platform User",
    },
    isPaidUser: {
      type: "boolean",
      value: true,
      label: "Is Paid User",
    },
  });

  // Mock trpc.viewer.organizations.listCurrent.useQuery
  trpc.viewer.organizations.listCurrent.useQuery = () => ({
    data: {
      isPrivate: false,
      user: {
        role: 'ADMIN'
      }
    },
    isPending: false
  });

  // Mock useGetUserAttributes hook
  const useGetUserAttributes = () => ({
    isUserLoading: false,
    isUserBillingDataLoading: false,
    isPlatformUser: state.isPlatformUser.value,
    isPaidUser: state.isPaidUser.value,
    userBillingData: {},
    userOrgId: '123'
  });

  // Mock useLocale hook
  const useLocale = () => ({
    t: (key: string) => key
  });

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent />
    </React.Suspense>
  );
}