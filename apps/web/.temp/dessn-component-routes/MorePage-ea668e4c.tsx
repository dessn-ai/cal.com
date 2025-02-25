import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/more/more-page-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}