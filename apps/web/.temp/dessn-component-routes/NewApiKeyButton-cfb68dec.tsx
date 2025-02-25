import React from 'react';
import { useParentState } from '../useIframeState';
import { NewApiKeyButton } from '../../modules/settings/developer/api-keys-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <NewApiKeyButton />
  );
}