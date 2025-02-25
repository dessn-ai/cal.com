import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/team/team-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    considerUnpublished: {
      type: "boolean",
      value: false,
      label: "Consider Unpublished",
    },
    isValidOrgDomain: {
      type: "boolean",
      value: true,
      label: "Is Valid Org Domain",
    },
    team: {
      type: "string",
      value: JSON.stringify({
        name: "Sample Team",
        slug: "sample-team",
        bio: "<p>This is a sample team bio.</p>",
        theme: null,
        members: [],
        eventTypes: [],
        isPrivate: false,
        isOrganization: false,
        metadata: {},
        parent: null,
        children: [],
        safeBio: "<p>This is a sample team bio.</p>",
        logoUrl: null,
      }),
      label: "Team Data",
    },
    trpcState: {
      type: "string",
      value: JSON.stringify({}),
      label: "TRPC State",
    },
  });

  const teamData = JSON.parse(state.team.value);

  return (
    <ImportedComponent
      considerUnpublished={state.considerUnpublished.value}
      isValidOrgDomain={state.isValidOrgDomain.value}
      team={teamData}
      trpcState={JSON.parse(state.trpcState.value)}
    />
  );
}