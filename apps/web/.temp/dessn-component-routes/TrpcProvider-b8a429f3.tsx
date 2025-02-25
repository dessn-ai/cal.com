import React from 'react';
import { useParentState } from '../useIframeState';
import { TrpcProvider } from '../../app/_trpc/trpc-provider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Example Child Content</div>",
      label: "Children",
    },
  });

  return (
    <TrpcProvider>
      {state.children.value}
    </TrpcProvider>
  );
}