import React from 'react';
import { useParentState } from '../useIframeState';
import { HelpCards } from '../../components/settings/platform/dashboard/HelpCards';


export default function ComponentPreview() {
  // Since HelpCards doesn't accept any props, we don't need to use useParentState
  // However, we'll keep it here in case we want to add configurable options in the future
  const [state, setState] = useParentState({});

  return <HelpCards />;
}