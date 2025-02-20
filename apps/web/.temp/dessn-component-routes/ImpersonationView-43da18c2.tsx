import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/admin/impersonation-view';

import { useRouter } from 'next/router';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
  });

  const router = useRouter();

  // Mock next-auth/react signIn function
  const mockSignIn = (provider: string, options: any) => {
    console.log(`Mocked signIn called with provider: ${provider} and options:`, options);
  };

  // Mock next/navigation useSearchParams hook
  const mockUseSearchParams = () => {
    return {
      get: (param: string) => state.username.value,
    };
  };

  return (
    <ImportedComponent
      signIn={mockSignIn}
      useSearchParams={mockUseSearchParams}
      useRouter={() => router}
    />
  );
}