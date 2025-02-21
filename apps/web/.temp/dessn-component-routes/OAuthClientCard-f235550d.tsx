import React from 'react';
import { useParentState } from '../useIframeState';
import { OAuthClientCard } from '../../components/settings/platform/oauth-clients/OAuthClientCard';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "Sample OAuth Client",
      label: "Name",
    },
    redirectUris: {
      type: "string",
      value: "https://example.com/callback,https://app.example.com/oauth",
      label: "Redirect URIs",
    },
    bookingRedirectUri: {
      type: "string",
      value: "https://example.com/booking-callback",
      label: "Booking Redirect URI",
    },
    bookingCancelRedirectUri: {
      type: "string",
      value: "https://example.com/cancel-callback",
      label: "Booking Cancel Redirect URI",
    },
    bookingRescheduleRedirectUri: {
      type: "string",
      value: "https://example.com/reschedule-callback",
      label: "Booking Reschedule Redirect URI",
    },
    areEmailsEnabled: {
      type: "boolean",
      value: true,
      label: "Are Emails Enabled",
    },
    permissions: {
      type: "number",
      value: 15,
      label: "Permissions",
    },
    lastItem: {
      type: "boolean",
      value: false,
      label: "Last Item",
    },
    id: {
      type: "string",
      value: "client_123456789",
      label: "Client ID",
    },
    secret: {
      type: "string",
      value: "secret_abcdefghijklmnop",
      label: "Client Secret",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    organizationId: {
      type: "number",
      value: 1,
      label: "Organization ID",
    },
  });

  const handleDelete = async (id: string) => {
    console.log(`Deleting client with id: ${id}`);
  };

  return (
    <OAuthClientCard
      name={state.name.value}
      redirectUris={state.redirectUris.value.split(',')}
      bookingRedirectUri={state.bookingRedirectUri.value}
      bookingCancelRedirectUri={state.bookingCancelRedirectUri.value}
      bookingRescheduleRedirectUri={state.bookingRescheduleRedirectUri.value}
      areEmailsEnabled={state.areEmailsEnabled.value}
      permissions={state.permissions.value}
      lastItem={state.lastItem.value}
      id={state.id.value}
      secret={state.secret.value}
      onDelete={handleDelete}
      isLoading={state.isLoading.value}
      organizationId={state.organizationId.value}
    />
  );
}