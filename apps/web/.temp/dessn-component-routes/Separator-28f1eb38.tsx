import React from 'react';
import { useParentState } from '../useIframeState';
import { Separator } from '../../../../packages/emails/src/components/Separator';


export default function ComponentPreview() {
  // Since Separator doesn't accept any props, we don't need to use useParentState
  return <Separator />;
}