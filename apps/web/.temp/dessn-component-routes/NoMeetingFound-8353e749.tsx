import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/videos/views/videos-no-meeting-found-single-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}