import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(admin-layout)/admin/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <ImportedComponent />;
}