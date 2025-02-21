import React from 'react';
import { useParentState } from '../useIframeState';
import { AddNewTeamsForm } from '../../../../packages/features/ee/organizations/components/AddNewTeamsForm';

import { useForm } from 'react-hook-form';
import { trpc } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    orgId: {
      type: "number",
      value: 1,
      label: "Organization ID",
    },
  });

  const form = useForm({
    defaultValues: {
      teams: [{ name: "" }],
      moveTeams: [],
    },
  });

  // Mock the trpc hooks
  const mockTeams = [
    { id: 1, name: "Team 1", slug: "team-1" },
    { id: 2, name: "Team 2", slug: "team-2" },
  ];

  const mockOrg = {
    id: state.orgId.value,
    slug: "org-slug",
    requestedSlug: null,
  };

  trpc.viewer.teams.list.useQuery = () => ({ data: mockTeams });
  trpc.viewer.teams.get.useQuery = () => ({ data: mockOrg });

  return (
    <AddNewTeamsForm />
  );
}