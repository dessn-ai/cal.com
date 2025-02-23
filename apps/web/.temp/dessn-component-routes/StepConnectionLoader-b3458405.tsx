import React from 'react';
import { useParentState } from '../useIframeState';
import { StepConnectionLoader } from '../../components/getting-started/components/StepConnectionLoader';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <StepConnectionLoader />;
}