import React from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the component with no SSR to avoid Node.js specific imports
const ImportedComponent = dynamic(() => import('../../modules/bookings/views/bookings-single-view'), {
  ssr: false,
});

// Create a context for router query
const RouterQueryContext = React.createContext({ uid: "booking-123" });

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again.</div>;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const bookingUid = "booking-123";
  const [state, setState] = useParentState({
    userTimeFormat: {
      type: "number",
      value: 24,
      label: "User Time Format",
    },
    requiresLoginToUpdate: {
      type: "boolean",
      value: false,
      label: "Requires Login to Update",
    },
    rescheduledToUid: {
      type: "string",
      value: null,
      label: "Rescheduled To UID",
    },
    isLoggedInUserHost: {
      type: "boolean",
      value: true,
      label: "Is Logged In User Host",
    },
    internalNotePresets: {
      type: "string",
      value: "[]",
      label: "Internal Note Presets",
    },
    tz: {
      type: "string",
      value: "America/New_York",
      label: "Timezone",
    },
    orgSlug: {
      type: "string",
      value: null,
      label: "Organization Slug",
    },
    themeBasis: {
      type: "string",
      value: "light",
      label: "Theme Basis",
    },
    hideBranding: {
      type: "boolean",
      value: false,
      label: "Hide Branding",
    },
    profile: {
      type: "string",
      value: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        theme: "light",
        brandColor: "#000000",
        darkBrandColor: "#ffffff",
        slug: "johndoe",
      }),
      label: "Profile",
    },
    eventType: {
      type: "string",
      value: JSON.stringify({
        title: "Sample Event",
        description: "This is a sample event",
        length: 30,
        eventName: "Sample Event",
        requiresConfirmation: false,
        owner: {
          id: 123
        }
      }),
      label: "Event Type",
    },
    recurringBookings: {
      type: "string",
      value: "[]",
      label: "Recurring Bookings",
    },
    trpcState: {
      type: "string",
      value: "{}",
      label: "TRPC State",
    },
    dynamicEventName: {
      type: "string",
      value: "Sample Dynamic Event",
      label: "Dynamic Event Name",
    },
    bookingInfo: {
      type: "string",
      value: JSON.stringify({
        uid: bookingUid,
        id: 123,
        userId: 456,
        responses: {},
        user: {
          email: "john@example.com",
          name: "John Doe",
          timeZone: "America/New_York"
        },
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        title: "Test Booking",
        description: "Test Description",
        status: "ACCEPTED",
        attendees: [
          {
            email: "attendee@example.com",
            name: "Test Attendee",
            timeZone: "America/New_York"
          }
        ],
        userPrimaryEmail: "john@example.com",
        location: "https://meet.google.com/test",
        cancellationReason: null,
        rejectionReason: null,
        seatsReferences: []
      }),
      label: "Booking Info",
    },
    paymentStatus: {
      type: "string",
      value: null,
      label: "Payment Status",
    }
  });

  const searchParams = new URLSearchParams({
    uid: bookingUid,
    isSuccessBookingPage: "true"
  });

  const routerQueryValue = {
    uid: bookingUid,
    isSuccessBookingPage: "true"
  };

  return (
    <ErrorBoundary>
      <RouterQueryContext.Provider value={routerQueryValue}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <div className="h-screen">
            <ImportedComponent
              uid={bookingUid}
              userTimeFormat={state.userTimeFormat.value}
              requiresLoginToUpdate={state.requiresLoginToUpdate.value}
              rescheduledToUid={state.rescheduledToUid.value}
              isLoggedInUserHost={state.isLoggedInUserHost.value}
              internalNotePresets={JSON.parse(state.internalNotePresets.value)}
              tz={state.tz.value}
              orgSlug={state.orgSlug.value}
              themeBasis={state.themeBasis.value}
              hideBranding={state.hideBranding.value}
              profile={JSON.parse(state.profile.value)}
              eventType={JSON.parse(state.eventType.value)}
              recurringBookings={JSON.parse(state.recurringBookings.value)}
              trpcState={JSON.parse(state.trpcState.value)}
              dynamicEventName={state.dynamicEventName.value}
              bookingInfo={JSON.parse(state.bookingInfo.value)}
              paymentStatus={state.paymentStatus.value}
              searchParams={searchParams}
              query={routerQueryValue}
            />
          </div>
        </React.Suspense>
      </RouterQueryContext.Provider>
    </ErrorBoundary>
  );
}