import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/auth/signin-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    providers: {
      type: 'string',
      value: JSON.stringify({
        Google: { id: 'google', name: 'Google' },
        GitHub: { id: 'github', name: 'GitHub' },
      }),
      label: 'Providers',
    },
  });

  const providers = JSON.parse(state.providers.value);

  return <ImportedComponent providers={providers} />;
}