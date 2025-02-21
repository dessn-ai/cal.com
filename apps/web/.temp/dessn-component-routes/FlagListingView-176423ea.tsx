import React from 'react';
import { useParentState } from '../useIframeState';
import { FlagListingView } from '../../../../packages/features/flags/pages/flag-listing-view';


export default function ComponentPreview() {
  // Since FlagListingView doesn't accept any props, we don't need to use useParentState
  // However, we'll keep it here in case we want to add props in the future
  const [state, setState] = useParentState({});

  return <FlagListingView />;
}