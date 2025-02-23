import React from 'react';
import { useParentState } from '../useIframeState';
import { OrgUpgradeBanner } from '../../../../packages/features/ee/organizations/components/OrgUpgradeBanner';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    orgUpgradeBanner: {
      type: "dropdown",
      value: "hasData",
      options: ["hasData", "noData"],
      label: "Organization Upgrade Banner Data",
    },
  });

  const mockData = state.orgUpgradeBanner.value === "hasData" 
    ? [{
        team: {
          name: "Sample Team"
        }
      }]
    : null;

  return <OrgUpgradeBanner data={mockData} />;
}