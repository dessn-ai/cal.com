import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/teams/teams-view';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}