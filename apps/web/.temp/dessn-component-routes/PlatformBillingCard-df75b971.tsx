import React from 'react';
import { useParentState } from '../useIframeState';
import { PlatformBillingCard } from '../../components/settings/platform/pricing/billing-card/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    plan: {
      type: "string",
      value: "Pro Plan",
      label: "Plan Name",
    },
    description: {
      type: "string",
      value: "Advanced features for professionals",
      label: "Description",
    },
    pricing: {
      type: "number",
      value: 19.99,
      label: "Pricing",
    },
    includes: {
      type: "string",
      value: "Unlimited bookings,Advanced analytics,Priority support",
      label: "Included Features (comma-separated)",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    currentPlan: {
      type: "boolean",
      value: false,
      label: "Is Current Plan",
    },
  });

  const handleSubscribe = () => {
    console.log("Subscribe clicked");
  };

  return (
    <PlatformBillingCard
      plan={state.plan.value}
      description={state.description.value}
      pricing={state.pricing.value}
      includes={state.includes.value.split(',')}
      isLoading={state.isLoading.value}
      currentPlan={state.currentPlan.value}
      handleSubscribe={handleSubscribe}
    />
  );
}