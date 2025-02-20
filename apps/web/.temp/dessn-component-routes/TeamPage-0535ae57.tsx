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
        safeBio: "<p>This is a sample team bio.</p>",
        theme: "light",
        members: [
          {
            name: "John Doe",
            accepted: true,
            subteams: ["sample-team"],
          }
        ],
        eventTypes: [
          {
            title: "Sample Event",
            slug: "sample-event",
            users: [],
            description: "Sample event description",
            descriptionAsSafeHTML: "Sample event description",
            length: 30,
            schedulingType: null,
            recurringEvent: null,
            price: 0,
            currency: "USD",
            requiresConfirmation: false,
            metadata: {
              apps: {},
              multipleDuration: [30, 60],
              requiresConfirmationThreshold: {
                time: 24,
                unit: "hours"
              },
              additionalNotesRequired: false
            },
            seatsPerTimeSlot: null
          }
        ],
        isPrivate: false,
        hideBookATeamMember: false,
        isOrganization: false,
        parent: null,
        children: [],
        logoUrl: null,
        brandColor: "#000000",
        darkBrandColor: "#FFFFFF",
        metadata: {
          requestedSlug: "sample-team"
        },
      }),
      label: "Team Data",
    },
    trpcState: {
      type: "string",
      value: JSON.stringify({
        queries: [],
        mutations: [],
        subscriptions: [],
      }),
      label: "TRPC State",
    },
    isValidOrgDomain: {
      type: "boolean",
      value: false,
      label: "Is Valid Org Domain",
    },
  });

  const team = JSON.parse(state.team.value);

  try {
    return (
      <div className="w-full">
        <ImportedComponent
          considerUnpublished={state.considerUnpublished.value}
          team={team}
          trpcState={JSON.parse(state.trpcState.value)}
          isValidOrgDomain={state.isValidOrgDomain.value}
        />
      </div>
    );
  } catch (error) {
    console.error("Error rendering TeamPage:", error);
    return <div>Error rendering team page component</div>;
  }
}