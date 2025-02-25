import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/video/components/RecordingListSkeleton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}