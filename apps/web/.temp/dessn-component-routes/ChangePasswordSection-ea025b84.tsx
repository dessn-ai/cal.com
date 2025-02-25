import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/security/ChangePasswordSection';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to configure for this component
  });

  return <ImportedComponent />;
}