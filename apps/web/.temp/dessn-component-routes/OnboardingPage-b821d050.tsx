import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/getting-started/[[...step]]/onboarding-view';

import { DehydratedState } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trpcState: {
      type: 'string',
      value: JSON.stringify({}),
      label: 'TRPC State',
    },
    hasPendingInvites: {
      type: 'boolean',
      value: false,
      label: 'Has Pending Invites',
    },
    _nextI18Next: {
      type: 'string',
      value: JSON.stringify({
        initialI18nStore: {},
        initialLocale: 'en',
        ns: ['common'],
        userConfig: null,
      }),
      label: 'Next I18Next Config',
    },
  });

  const trpcState = JSON.parse(state.trpcState.value) as DehydratedState;
  const _nextI18Next = JSON.parse(state._nextI18Next.value);

  return (
    <ImportedComponent
      trpcState={trpcState}
      hasPendingInvites={state.hasPendingInvites.value}
      _nextI18Next={_nextI18Next}
    />
  );
}