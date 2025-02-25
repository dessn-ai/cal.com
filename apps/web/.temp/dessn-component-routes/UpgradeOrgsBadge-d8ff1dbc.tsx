import React from 'react';
import { useParentState } from '../useIframeState';
import { UpgradeOrgsBadge } from '../../../../packages/ui/components/badge/UpgradeOrgsBadge';


export default function ComponentPreview() {
  // Since UpgradeOrgsBadge doesn't accept any props, we don't need to use useParentState
  // However, we'll keep it here in case we want to add configurable options in the future
  const [state, setState] = useParentState({});

  return <UpgradeOrgsBadge />;
}