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
    team: {
      type: "string",
      value: JSON.stringify({
        name: "Sample Team",
        slug: "sample-team",
        bio: "<p>This is a sample team bio.</p>",
        theme: "light",
        members: [],
        eventTypes: [],
        isPrivate: false,
        hideBookATeamMember: false,
        isOrganization: false,
        parent: null,
        children: [],
        logoUrl: null,
        brandColor: "#000000",
        darkBrandColor: "#FFFFFF",
      }),
      label: "Team Data",
    },
    trpcState: {
      type: "string",
      value: JSON.stringify({}),
      label: "TRPC State",
    },
    isValidOrgDomain: {
      type: "boolean",
      value: false,
      label: "Is Valid Org Domain",
    },
  });

  return (
    <ImportedComponent
      considerUnpublished={state.considerUnpublished.value}
      team={JSON.parse(state.team.value)}
      trpcState={JSON.parse(state.trpcState.value)}
      isValidOrgDomain={state.isValidOrgDomain.value}
    />
  );
}