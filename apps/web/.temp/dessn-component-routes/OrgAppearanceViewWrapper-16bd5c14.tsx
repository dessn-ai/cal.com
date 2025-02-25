import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/appearance';

import { useForm } from 'react-hook-form';
import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currentOrg: {
      type: 'object',
      value: {
        id: 1,
        theme: null,
        hideBranding: false,
        brandColor: '#292929',
        darkBrandColor: '#fafafa',
        slug: 'example-org',
        organizationSettings: {
          allowSEOIndexing: false,
          orgAutoAcceptEmail: 'example@org.com',
          orgProfileRedirectsToVerifiedDomain: false,
        },
      },
      label: 'Current Organization',
    },
    orgRole: {
      type: 'dropdown',
      value: MembershipRole.OWNER,
      options: Object.values(MembershipRole),
      label: 'Organization Role',
    },
  });

  const useSessionMock = () => ({
    data: {
      user: {
        org: {
          role: state.orgRole.value,
        },
      },
    },
  });

  const trpcMock = {
    viewer: {
      organizations: {
        listCurrent: {
          useQuery: () => ({
            data: state.currentOrg.value,
            isPending: false,
            error: null,
          }),
        },
        update: {
          useMutation: () => ({
            mutate: () => {},
            isPending: false,
          }),
        },
      },
      teams: {
        get: {
          invalidate: async () => {},
        },
      },
    },
    useUtils: () => ({
      viewer: {
        teams: {
          get: {
            invalidate: async () => {},
          },
        },
        organizations: {
          listCurrent: {
            invalidate: async () => {},
          },
        },
      },
    }),
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent
        useSession={useSessionMock}
        useRouter={() => ({ replace: () => {} })}
        useState={React.useState}
        useEffect={React.useEffect}
        useForm={useForm}
        trpc={trpcMock}
      />
    </React.Suspense>
  );
}