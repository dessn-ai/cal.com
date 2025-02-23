import React from 'react';
import { useParentState } from '../useIframeState';
import { UpgradeTip } from '../../../../packages/features/tips/UpgradeTip';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Upgrade your plan",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Get access to advanced features",
      label: "Description",
    },
    background: {
      type: "string",
      value: "/img/upgrade-background",
      label: "Background Image",
    },
    plan: {
      type: "dropdown",
      value: "team",
      options: ["team", "enterprise"],
      label: "Plan",
    },
  });

  const features = [
    {
      icon: <div>Icon1</div>,
      title: "Feature 1",
      description: "Description of feature 1",
    },
    {
      icon: <div>Icon2</div>,
      title: "Feature 2",
      description: "Description of feature 2",
    },
    {
      icon: <div>Icon3</div>,
      title: "Feature 3",
      description: "Description of feature 3",
    },
  ];

  return (
    <UpgradeTip
      title={state.title.value}
      description={state.description.value}
      background={state.background.value}
      features={features}
      plan={state.plan.value as "team" | "enterprise"}
    >
      <div>Children content</div>
    </UpgradeTip>
  );
}