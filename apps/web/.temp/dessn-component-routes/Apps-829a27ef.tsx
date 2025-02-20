import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/apps/apps-view';

import { DehydratedState } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    categories: {
      type: "string",
      value: JSON.stringify([
        { name: "calendar", count: 5 },
        { name: "messaging", count: 3 },
        { name: "crm", count: 2 }
      ]),
      label: "Categories"
    },
    appStore: {
      type: "string",
      value: JSON.stringify([
        { name: "Google Calendar", description: "Sync your Google Calendar", installed: false },
        { name: "Slack", description: "Connect with Slack", installed: true },
        { name: "Zoom", description: "Video conferencing", installed: false }
      ]),
      label: "App Store"
    },
    userAdminTeams: {
      type: "string",
      value: JSON.stringify([1, 2, 3]),
      label: "User Admin Teams"
    },
    trpcState: {
      type: "string",
      value: JSON.stringify({}),
      label: "TRPC State"
    }
  });

  return (
    <ImportedComponent
      categories={JSON.parse(state.categories.value)}
      appStore={JSON.parse(state.appStore.value)}
      userAdminTeams={JSON.parse(state.userAdminTeams.value)}
      trpcState={JSON.parse(state.trpcState.value) as DehydratedState}
    />
  );
}