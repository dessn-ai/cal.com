import React from 'react';
import { useParentState } from '../useIframeState';
import { DryRunMessage } from '../../../../packages/features/bookings/Booker/components/DryRunMessage';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
  });

  return <DryRunMessage isEmbed={state.isEmbed.value} />;
}