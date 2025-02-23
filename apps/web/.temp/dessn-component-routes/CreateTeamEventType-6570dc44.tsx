import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/teams/[id]/event-types-view';

import { useRouter } from 'next/navigation';
import { trpc } from '@calcom/trpc/react';
import { useCompatSearchParams } from '@calcom/lib/hooks/useCompatSearchParams';
import { useCreateEventType } from '@calcom/lib/hooks/useCreateEventType';
import { useLocale } from '@calcom/lib/hooks/useLocale';

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

  // Mock useCreateEventType hook
  const mockCreateEventType = {
    form: {},
    createMutation: {
      isPending: false,
      mutate: () => {},
    },
    isManagedEventType: false,
  };

  useCreateEventType.mockReturnValue(mockCreateEventType);

  return (
    <ImportedComponent />
  );
}