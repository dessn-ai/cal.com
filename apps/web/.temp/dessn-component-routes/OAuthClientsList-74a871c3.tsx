import React from 'react';
import { useParentState } from '../useIframeState';
import { OAuthClientsList } from '../../components/settings/platform/dashboard/oauth-clients-list/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    oauthClients: {
      type: "string",
      value: JSON.stringify([
        {
          id: "1",
          name: "Sample OAuth Client",
          redirectUris: ["https://example.com/callback"],
          bookingRedirectUri: "https://example.com/booking",
          bookingRescheduleRedirectUri: "https://example.com/reschedule",
          bookingCancelRedirectUri: "https://example.com/cancel",
          permissions: ["read_events", "write_events"],
          secret: "sampleSecret123",
          areEmailsEnabled: true,
          organizationId: "org123"
        }
      ]),
      label: "OAuth Clients"
    },
    isDeleting: {
      type: "boolean",
      value: false,
      label: "Is Deleting"
    }
  });

  const handleDelete = async (id: string) => {
    console.log(`Deleting client with id: ${id}`);
    // Simulating async operation
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <OAuthClientsList
      oauthClients={JSON.parse(state.oauthClients.value)}
      isDeleting={state.isDeleting.value}
      handleDelete={handleDelete}
    />
  );
}