import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/platform/plans/platform-plans-view';

// Create a mock module for useGetUserAttributes
const mockUseGetUserAttributes = (props: any) => {
  return {
    isUserLoading: props.isUserLoading,
    isUserBillingDataLoading: props.isUserBillingDataLoading,
    isPlatformUser: props.isPlatformUser,
    isPaidUser: props.isPaidUser,
    userBillingData: props.userBillingData,
    userOrgId: props.userOrgId,
  };
};

// Override the actual import with our mock
const useGetUserAttributes = mockUseGetUserAttributes;

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

  // Use the mock hook with the state values
  const userAttributes = useGetUserAttributes({
    isUserLoading: state.isUserLoading.value,
    isUserBillingDataLoading: state.isUserBillingDataLoading.value,
    isPlatformUser: state.isPlatformUser.value,
    isPaidUser: state.isPaidUser.value,
    userBillingData: JSON.parse(state.userBillingData.value),
    userOrgId: state.userOrgId.value,
  });

  return <ImportedComponent />;
}