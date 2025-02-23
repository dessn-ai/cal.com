import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/platform/plans/platform-plans-view';

import { useGetUserAttributes } from '@components/settings/platform/hooks/useGetUserAttributes';

// Mock the useGetUserAttributes hook
jest.mock('@components/settings/platform/hooks/useGetUserAttributes', () => ({
  useGetUserAttributes: jest.fn(),
}));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isUserLoading: {
      type: "boolean",
      value: false,
      label: "Is User Loading",
    },
    isUserBillingDataLoading: {
      type: "boolean",
      value: false,
      label: "Is User Billing Data Loading",
    },
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
    userBillingData: {
      type: "string",
      value: JSON.stringify({ plan: "PRO" }),
      label: "User Billing Data",
    },
    userOrgId: {
      type: "string",
      value: "org-123",
      label: "User Org ID",
    },
  });

  // Mock the useGetUserAttributes hook
  (useGetUserAttributes as jest.Mock).mockReturnValue({
    isUserLoading: state.isUserLoading.value,
    isUserBillingDataLoading: state.isUserBillingDataLoading.value,
    isPlatformUser: state.isPlatformUser.value,
    isPaidUser: state.isPaidUser.value,
    userBillingData: JSON.parse(state.userBillingData.value),
    userOrgId: state.userOrgId.value,
  });

  return <ImportedComponent />;
}