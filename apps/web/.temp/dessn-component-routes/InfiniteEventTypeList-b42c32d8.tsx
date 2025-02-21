import React from 'react';
import { useParentState } from '../useIframeState';
import { InfiniteEventTypeList } from '../../modules/event-types/views/event-types-listing-view';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    group: {
      type: "object",
      value: {
        teamId: null,
        parentId: null,
        bookerUrl: "https://example.com",
        membershipRole: null,
        profile: {
          slug: "example-slug",
          name: "Example Name",
          image: "https://example.com/image.jpg",
          eventTypesLockedByOrg: false
        },
        metadata: {
          membershipCount: 1,
          readOnly: false
        }
      },
      label: "Group"
    },
    readOnly: {
      type: "boolean",
      value: false,
      label: "Read Only"
    },
    bookerUrl: {
      type: "string",
      value: "https://example.com",
      label: "Booker URL"
    },
    pages: {
      type: "object",
      value: [
        {
          nextCursor: 1,
          eventTypes: [
            {
              id: 1,
              title: "Example Event Type",
              slug: "example-event-type",
              description: "This is an example event type description",
              length: 30,
              hidden: false,
              schedulingType: "ROUND_ROBIN",
              users: [],
              userId: null,
              teamId: null,
              owner: {
                id: 1,
                name: "Example User",
                email: "user@example.com",
                username: "exampleuser"
              },
              metadata: {},
              locations: [],
              price: 0,
              currency: "USD",
              bookingFields: [],
              seatsPerTimeSlot: null,
              minimumBookingNotice: 120,
              beforeEventBuffer: 0,
              afterEventBuffer: 0,
              periodType: "UNLIMITED",
              periodStartDate: null,
              periodEndDate: null,
              periodDays: null,
              periodCountCalendarDays: false,
              requiresConfirmation: false,
              disableGuests: false
            }
          ]
        }
      ],
      label: "Pages"
    },
    lockedByOrg: {
      type: "boolean",
      value: false,
      label: "Locked by Organization"
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending"
    },
    debouncedSearchTerm: {
      type: "string",
      value: "",
      label: "Debounced Search Term"
    }
  });

  return (
    <InfiniteEventTypeList
      group={state.group.value}
      readOnly={state.readOnly.value}
      bookerUrl={state.bookerUrl.value}
      pages={state.pages.value}
      lockedByOrg={state.lockedByOrg.value}
      isPending={state.isPending.value}
      debouncedSearchTerm={state.debouncedSearchTerm.value}
    />
  );
}