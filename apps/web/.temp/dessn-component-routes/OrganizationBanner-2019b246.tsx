import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationBanner } from '../../../../packages/features/users/components/UserTable/EditSheet/OrganizationBanner';

import { trpc } from "@calcom/trpc/react";

const MockTRPCProvider = ({ children }) => {
  const mockUseQuery = () => ({
    data: {
      bannerUrl: 'https://example.com/banner.jpg',
    },
    isPending: false,
    error: null,
  });

  const mockTrpc = {
    viewer: {
      organizations: {
        listCurrent: {
          useQuery: mockUseQuery,
        },
      },
    },
  };

  return (
    <trpc.Provider client={mockTrpc as any}>
      {children}
    </trpc.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    bannerUrl: {
      type: "string",
      value: "https://example.com/banner.jpg",
      label: "Banner URL",
    },
  });

  return (
    <MockTRPCProvider>
      <OrganizationBanner />
    </MockTRPCProvider>
  );
}