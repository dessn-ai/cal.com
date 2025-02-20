import React from 'react';
import { useParentState } from '../useIframeState';
import { EventMembers } from '../../../../packages/features/bookings/components/event-meta/Members';

import { SchedulingType } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    schedulingType: {
      type: "dropdown",
      value: SchedulingType.COLLECTIVE,
      options: Object.values(SchedulingType),
      label: "Scheduling Type",
    },
    isPrivateLink: {
      type: "boolean",
      value: false,
      label: "Is Private Link",
    },
  });

  const users = [
    {
      name: "John Doe",
      username: "johndoe",
      avatarUrl: "https://example.com/avatar1.jpg",
      weekStart: "Monday",
      profile: { organization: { slug: "org1" } },
    },
    {
      name: "Jane Smith",
      username: "janesmith",
      avatarUrl: "https://example.com/avatar2.jpg",
      weekStart: "Sunday",
      profile: { organization: { slug: "org2" } },
    },
  ];

  const profile = {
    name: "Team Profile",
    image: "https://example.com/team-image.jpg",
    bookerLayouts: [],
  };

  const entity = {
    teamSlug: "team-slug",
    orgSlug: "org-slug",
    logoUrl: "https://example.com/logo.png",
    name: "Team Entity",
  };

  return (
    <EventMembers
      schedulingType={state.schedulingType.value as SchedulingType}
      users={users}
      profile={profile}
      entity={entity}
      isPrivateLink={state.isPrivateLink.value}
    />
  );
}