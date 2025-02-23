import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/teams/[id]/event-types-view';

import { useRouter } from 'next/navigation';
import { trpc } from '@calcom/trpc/react';
import { useCompatSearchParams } from '@calcom/lib/hooks/useCompatSearchParams';
import { useLocale } from '@calcom/lib/hooks/useLocale';

// Override the hook import
const useCreateEventType = () => ({
  form: {
    register: () => ({}),
    setValue: () => {},
    watch: () => ({}),
    handleSubmit: (fn: any) => fn,
    formState: { errors: {} },
  },
  createMutation: {
    isPending: false,
    mutate: () => Promise.resolve(),
  },
  isManagedEventType: false,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
  });

  const router = useRouter();
  const searchParams = useCompatSearchParams();
  const { t } = useLocale();

  // Mock trpc query
  const mockTeamData = {
    slug: 'mock-team',
  };

  trpc.viewer.teams.get.useQuery = () => ({
    data: mockTeamData,
  });

  return (
    <ImportedComponent />
  );
}