import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/platform/plans/platform-plans-view';

// Create a wrapper component that provides the mocked data
const MockedPlatformPlans = () => {
  const [state] = useParentState({
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

  // Create the mock data object
  const mockData = {
    isUserLoading: state.isUserLoading.value,
    isUserBillingDataLoading: state.isUserBillingDataLoading.value,
    isPlatformUser: state.isPlatformUser.value,
    isPaidUser: state.isPaidUser.value,
    userBillingData: JSON.parse(state.userBillingData.value),
    userOrgId: state.userOrgId.value,
  };

  // Wrap the component in a try-catch to handle any potential errors
  try {
    return (
      <div data-testid="platform-plans-preview">
        <ImportedComponent {...mockData} />
      </div>
    );
  } catch (error) {
    console.error('Error rendering PlatformPlans:', error);
    return <div>Error rendering PlatformPlans component</div>;
  }
};

export default function ComponentPreview() {
  return <MockedPlatformPlans />;
}