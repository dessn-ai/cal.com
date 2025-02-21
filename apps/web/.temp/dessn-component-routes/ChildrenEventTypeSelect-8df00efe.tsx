import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/ChildrenEventTypeSelect';

import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: 'string',
      value: JSON.stringify([
        {
          value: 'event1',
          label: 'Event 1',
          created: true,
          owner: {
            avatar: 'https://example.com/avatar.jpg',
            id: 1,
            email: 'user@example.com',
            name: 'John Doe',
            username: 'johndoe',
            membership: MembershipRole.OWNER,
            eventTypeSlugs: ['event1'],
            profile: {
              id: 1,
              upId: 'up1',
              username: 'johndoe',
              organizationId: null,
              organization: null,
            },
          },
          slug: 'event1',
          hidden: false,
        },
      ]),
      label: 'Selected Events',
    },
  });

  const handleChange = (newValue: readonly any[]) => {
    setState('value', JSON.stringify(newValue));
  };

  return (
    <ImportedComponent
      value={JSON.parse(state.value.value)}
      onChange={handleChange}
      options={[
        {
          value: 'event1',
          label: 'Event 1',
          created: true,
          owner: {
            avatar: 'https://example.com/avatar.jpg',
            id: 1,
            email: 'user@example.com',
            name: 'John Doe',
            username: 'johndoe',
            membership: MembershipRole.OWNER,
            eventTypeSlugs: ['event1'],
            profile: {
              id: 1,
              upId: 'up1',
              username: 'johndoe',
              organizationId: null,
              organization: null,
            },
          },
          slug: 'event1',
          hidden: false,
        },
        {
          value: 'event2',
          label: 'Event 2',
          created: true,
          owner: {
            avatar: 'https://example.com/avatar2.jpg',
            id: 2,
            email: 'user2@example.com',
            name: 'Jane Smith',
            username: 'janesmith',
            membership: MembershipRole.MEMBER,
            eventTypeSlugs: ['event2'],
            profile: {
              id: 2,
              upId: 'up2',
              username: 'janesmith',
              organizationId: null,
              organization: null,
            },
          },
          slug: 'event2',
          hidden: true,
        },
      ]}
    />
  );
}