import React from 'react';
import { useParentState } from '../useIframeState';
import { AlbyPriceComponent } from '../../../../packages/app-store/alby/components/AlbyPriceComponent';

import { Tooltip } from "@calcom/ui";
import { SatSymbol } from "@calcom/ui/components/icon/SatSymbol";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    displaySymbol: {
      type: "boolean",
      value: true,
      label: "Display Symbol",
    },
    price: {
      type: "number",
      value: 1000,
      label: "Price (in satoshis)",
    },
    formattedPrice: {
      type: "string",
      value: "1,000 sats",
      label: "Formatted Price",
    },
  });

  return (
    <AlbyPriceComponent
      displaySymbol={state.displaySymbol.value}
      price={state.price.value}
      formattedPrice={state.formattedPrice.value}
    />
  );
}