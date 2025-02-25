import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/general';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currentOrg: {
      type: 'object',
      value: {
        timeZone: 'America/New_York',
        timeFormat: 12,
        weekStart: 'Sunday'
      },
      label: 'Current Organization'
    },
    isAdminOrOwner: {
      type: 'boolean',
      value: true,
      label: 'Is Admin or Owner'
    },
    localeProp: {
      type: 'string',
      value: 'en',
      label: 'Locale'
    }
  });

  const mockSession = {
    data: {
      user: {
        org: {
          role: 'OWNER'
        }
      }
    }
  };

  const mockRouter = {
    replace: () => {}
  };

  const mockTrpc = {
    viewer: {
      organizations: {
        listCurrent: {
          useQuery: () => ({
            data: state.currentOrg.value,
            isPending: false,
            error: null
          })
        },
        update: {
          useMutation: () => ({
            mutate: () => {}
          })
        }
      },
      me: {
        useQuery: () => ({
          data: { locale: state.localeProp.value }
        })
      }
    }
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent
        session={mockSession}
        router={mockRouter}
        trpc={mockTrpc}
      />
    </React.Suspense>
  );
}