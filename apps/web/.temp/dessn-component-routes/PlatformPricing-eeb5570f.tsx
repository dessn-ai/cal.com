import React from 'react';
import { useParentState } from '../useIframeState';
import { PlatformPricing } from '../../components/settings/platform/pricing/platform-pricing/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    teamPlan: {
      type: "string",
      value: "free",
      label: "Team Plan",
    },
    heading: {
      type: "string",
      value: "Platform Pricing",
      label: "Heading",
    },
  });

  return (
    <PlatformPricing
      teamId={state.teamId.value}
      teamPlan={state.teamPlan.value}
      heading={state.heading.value}
    />
  );
}