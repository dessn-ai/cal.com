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
    initialI18nStore: {
      type: 'string',
      value: JSON.stringify({}),
      label: 'Initial I18n Store',
    },
    initialLocale: {
      type: 'string',
      value: 'en',
      label: 'Initial Locale',
    },
    ns: {
      type: 'string',
      value: JSON.stringify(['common']),
      label: 'Namespaces',
    },
    userConfig: {
      type: 'string',
      value: JSON.stringify(null),
      label: 'User Config',
    },
  });

  const trpcState: DehydratedState = JSON.parse(state.trpcState.value);
  const _nextI18Next = {
    initialI18nStore: JSON.parse(state.initialI18nStore.value),
    initialLocale: state.initialLocale.value,
    ns: JSON.parse(state.ns.value),
    userConfig: JSON.parse(state.userConfig.value),
  };

  return (
    <ImportedComponent
      trpcState={trpcState}
      hasPendingInvites={state.hasPendingInvites.value}
      _nextI18Next={_nextI18Next}
    />
  );
}