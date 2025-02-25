import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/my-account/appearance-view';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    user: {
      type: "object",
      value: {
        appTheme: null,
        brandColor: "#292929",
        darkBrandColor: "#fafafa",
        theme: null,
        hideBranding: false,
        metadata: {},
      },
      label: "User",
    },
    hasPaidPlan: {
      type: "boolean",
      value: false,
      label: "Has Paid Plan",
    },
  });

  const mockTrpc = {
    viewer: {
      me: {
        useQuery: () => ({
          data: state.user.value,
          isPending: false,
        }),
      },
      updateProfile: {
        useMutation: () => ({
          mutate: () => {},
          isPending: false,
        }),
      },
    },
    useUtils: () => ({}),
  };

  const mockUseHasPaidPlan = () => ({
    isPending: false,
    hasPaidPlan: state.hasPaidPlan.value,
  });

  return (
    <ImportedComponent
      trpc={mockTrpc}
      useHasPaidPlan={mockUseHasPaidPlan}
      useForm={useForm}
      useSession={() => ({ data: { user: { org: { id: null } } } })}
    />
  );
}