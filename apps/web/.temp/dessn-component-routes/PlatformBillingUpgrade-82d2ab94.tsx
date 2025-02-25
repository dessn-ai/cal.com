import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/platform/billing/billing-view';


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
    userOrgId: {
      type: "string",
      value: "org123",
      label: "User Org ID",
    },
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
  });

  // Mock the useGetUserAttributes hook
  const mockUseGetUserAttributes = () => ({
    isUserLoading: state.isUserLoading.value,
    isUserBillingDataLoading: state.isUserBillingDataLoading.value,
    isPlatformUser: state.isPlatformUser.value,
    userBillingData: {},
    isPaidUser: state.isPaidUser.value,
    userOrgId: state.userOrgId.value,
  });

  // Mock the useLocale hook
  const mockUseLocale = () => ({
    t: (key: string) => key,
  });

  // Mock the usePathname hook
  const mockUsePathname = () => "/settings/platform/billing";

  // Mock the global window object
  if (typeof window !== 'undefined') {
    window.Plain = {
      init: () => {},
      open: () => {},
    };
  }

  return (
    <div style={{ padding: '20px' }}>
      <ImportedComponent />
    </div>
  );
}