import React from 'react';
import { useParentState } from '../useIframeState';
import { MultiplePrivateLinksController } from '../../../../packages/features/eventtypes/components/MultiplePrivateLinksController';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: 'object',
      value: {
        name: 'Test Team',
        slug: 'test-team',
        id: 1,
        members: [],
        parentId: null,
        parent: null,
      },
      label: 'Team',
    },
    bookerUrl: {
      type: 'string',
      value: 'https://example.com/book',
      label: 'Booker URL',
    },
  });

  const methods = useForm({
    defaultValues: {
      multiplePrivateLinks: [],
      users: [{ id: 1 }],
      slug: 'test-event',
    },
  });

  return (
    <FormProvider {...methods}>
      <MultiplePrivateLinksController
        team={state.team.value}
        bookerUrl={state.bookerUrl.value}
      />
    </FormProvider>
  );
}