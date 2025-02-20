import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/videos/views/videos-meeting-ended-single-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    booking: {
      type: "object",
      value: {
        title: "Sample Meeting",
        description: "This is a sample meeting description",
        metadata: {},
        id: 1,
        user: {
          credentials: [
            {
              type: "zoom",
              key: {},
              id: 1,
              userId: 1,
              teamId: null,
              subscriptionId: null,
              appId: null,
              paymentStatus: null,
              billingCycleStart: null,
              invalid: null,
            },
          ],
        },
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        references: [
          {
            type: "zoom",
            uid: "123456789",
            meetingUrl: "https://zoom.us/j/123456789",
          },
        ],
        attendees: [
          {
            name: "John Doe",
            id: 1,
            email: "john@example.com",
            locale: "en",
            timeZone: "America/New_York",
            bookingId: 1,
            noShow: null,
            phoneNumber: null,
          },
        ],
        uid: "abc123",
        userPrimaryEmail: "host@example.com",
        customInputs: {},
      },
      label: "Booking",
    },
  });

  return <ImportedComponent booking={state.booking.value} />;
}