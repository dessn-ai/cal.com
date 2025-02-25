import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/pages/webhook-new-view';

import { useSession } from "next-auth/react";
import { trpc } from "@calcom/trpc/react";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    platform: {
      type: "boolean",
      value: false,
      label: "Platform",
    },
  });

  const session = {
    status: "authenticated",
    data: {
      user: {
        id: "user123",
      },
    },
  };

  trpc.viewer.integrations.useQuery = () => ({
    data: {
      items: [{ slug: "app1" }, { slug: "app2" }],
    },
    isPending: false,
  });

  trpc.viewer.webhook.list.useQuery = () => ({
    data: [],
  });

  trpc.viewer.webhook.create.useMutation = () => ({
    mutate: () => {},
  });

  return (
    <ImportedComponent />
  );
}