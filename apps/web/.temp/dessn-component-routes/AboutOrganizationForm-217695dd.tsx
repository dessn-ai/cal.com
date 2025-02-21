import React from 'react';
import { useParentState } from '../useIframeState';
import { AboutOrganizationForm } from '../../../../packages/features/ee/organizations/components/AboutOrganizationForm';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    orgId: {
      type: "string",
      value: "org123",
      label: "Organization ID",
    },
  });

  const mockRouter = {
    push: () => {},
  };

  const mockUseLocale = () => ({
    t: (key: string) => key,
  });

  const mockTrpc = {
    viewer: {
      organizations: {
        update: {
          useMutation: () => ({
            mutate: () => {},
            isPending: false,
          }),
        },
      },
    },
  };

  React.useEffect(() => {
    (global as any).useRouter = () => mockRouter;
    (global as any).useLocale = mockUseLocale;
    (global as any).trpc = mockTrpc;
    (global as any).useRouterQuery = () => ({ id: state.orgId.value });
  }, [state.orgId.value]);

  return <AboutOrganizationForm />;
}