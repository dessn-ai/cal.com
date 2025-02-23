import React from 'react';
import { useParentState } from '../useIframeState';
import { StorybookTrpcProvider } from '../../../../packages/ui/components/mocks/trpc';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <StorybookTrpcProvider>
      {/* The StorybookTrpcProvider doesn't require any props */}
    </StorybookTrpcProvider>
  );
}