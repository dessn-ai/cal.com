import React from 'react';
import { useParentState } from '../useIframeState';
import { ListSkeleton } from '../../../../packages/features/ee/organizations/pages/settings/attributes/ListSkeleton';


export default function ComponentPreview() {
  // Since ListSkeleton doesn't have any props, we don't need to use useParentState
  // However, we'll keep it here in case we want to add configurable options in the future
  const [state, setState] = useParentState({});

  return <ListSkeleton />;
}