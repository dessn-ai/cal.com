import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/platform/oauth-clients/create-new-view';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPlatformUser: {
      type: "boolean",
      value: true,
      label: "Is Platform User",
    },
    isPaidUser: {
      type: "boolean",
      value: true,
      label: "Is Paid User",
    },
    isUserLoading: {
      type: "boolean",
      value: false,
      label: "Is User Loading",
    },
  });

  const mockRouter = {
    push: () => {},
  };

  const mockUseCompatSearchParams = () => ({
    get: () => null,
  });

  const mockUseLocale = () => ({
    t: (key: string) => key,
  });

  const mockUseCreateOAuthClient = () => ({
    mutateAsync: async () => {},
    isPending: false,
  });

  const mockUseGetUserAttributes = () => ({
    isUserLoading: state.isUserLoading.value,
    isPlatformUser: state.isPlatformUser.value,
    isPaidUser: state.isPaidUser.value,
  });

  return (
    <React.Fragment>
      <ImportedComponent
        useRouter={() => mockRouter}
        useCompatSearchParams={mockUseCompatSearchParams}
        useLocale={mockUseLocale}
        useCreateOAuthClient={mockUseCreateOAuthClient}
        useGetUserAttributes={mockUseGetUserAttributes}
      />
    </React.Fragment>
  );
}