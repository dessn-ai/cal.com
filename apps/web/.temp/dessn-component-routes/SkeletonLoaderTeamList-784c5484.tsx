import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/SkeletonloaderTeamList';


export default function ComponentPreview() {
  // Since SkeletonLoaderTeamList doesn't accept any props, we don't need to use useParentState
  // However, we'll keep it here in case we want to add configurable options in the future
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}