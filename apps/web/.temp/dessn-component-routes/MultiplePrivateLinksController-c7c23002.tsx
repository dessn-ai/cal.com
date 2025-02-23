import React from 'react';
import { useParentState } from '../useIframeState';
import { MultiplePrivateLinksController } from '../../../../packages/features/eventtypes/components/MultiplePrivateLinksController';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: "string",
      value: "123",
      label: "Team ID",
    },
    bookerUrl: {
      type: "string",
      value: "https://example.com",
      label: "Booker URL",
    },
  });

  const methods = useForm({
    defaultValues: {
      multiplePrivateLinks: [],
      users: [{ id: "user1" }],
      slug: "event-slug",
    },
  });

  return (
    <FormProvider {...methods}>
      <MultiplePrivateLinksController
        team={{ id: state.team.value }}
        bookerUrl={state.bookerUrl.value}
      />
    </FormProvider>
  );
}