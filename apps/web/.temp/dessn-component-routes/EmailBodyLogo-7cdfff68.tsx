import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/emails/src/components/EmailBodyLogo';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to configure for this component
  });

  return <ImportedComponent />;
}