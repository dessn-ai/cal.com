import React from 'react';
import { useParentState } from '../useIframeState';
import { OAuthClientForm } from '../../components/settings/platform/oauth-clients/oauth-client-form/index';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    isFormDisabled: {
      type: "boolean",
      value: false,
      label: "Is Form Disabled",
    },
  });

  const { handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  const defaultValues = {
    name: 'Sample Client',
    redirectUris: [{ uri: 'https://example.com' }],
    eventTypeRead: true,
    eventTypeWrite: false,
    bookingRead: true,
    bookingWrite: false,
    scheduleRead: true,
    scheduleWrite: false,
    appsRead: true,
    appsWrite: false,
    profileRead: true,
    profileWrite: false,
    bookingRedirectUri: 'https://example.com/booking',
    bookingCancelRedirectUri: 'https://example.com/cancel',
    bookingRescheduleRedirectUri: 'https://example.com/reschedule',
    areEmailsEnabled: true,
  };

  return (
    <OAuthClientForm
      defaultValues={defaultValues}
      isPending={state.isPending.value}
      isFormDisabled={state.isFormDisabled.value}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}