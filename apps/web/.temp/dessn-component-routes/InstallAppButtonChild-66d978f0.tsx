import React from 'react';
import { useParentState } from '../useIframeState';
import { InstallAppButtonChild } from '../../components/apps/InstallAppButtonChild';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    multiInstall: {
      type: "boolean",
      value: false,
      label: "Multi Install",
    },
    paid: {
      type: "dropdown",
      value: "none",
      options: ["none", "trial", "subscription"],
      label: "Paid Status",
    },
    color: {
      type: "dropdown",
      value: "primary",
      options: ["primary", "secondary", "minimal", "destructive"],
      label: "Button Color",
    },
    size: {
      type: "dropdown",
      value: "base",
      options: ["sm", "base", "lg"],
      label: "Button Size",
    },
  });

  const paidValue = state.paid.value === "none" ? undefined : 
    state.paid.value === "trial" ? { trial: true } : { priceInUsd: 10, priceId: "price_123" };

  return (
    <InstallAppButtonChild
      multiInstall={state.multiInstall.value}
      paid={paidValue}
      color={state.color.value}
      size={state.size.value}
      onClick={() => console.log("Button clicked")}
    />
  );
}