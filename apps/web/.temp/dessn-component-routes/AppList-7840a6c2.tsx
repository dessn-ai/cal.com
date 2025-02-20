import React from 'react';
import { useParentState } from '../useIframeState';
import { AppList } from '../../../../packages/features/apps/components/AppList';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "calendar",
      options: ["calendar", "payment", "conferencing", "video", "other", "other_calendar", "automation", "crm"],
      label: "Variant",
    },
    listClassName: {
      type: "string",
      value: "grid grid-cols-3 gap-3",
      label: "List Class Name",
    },
    isBulkUpdateDefaultLocationPending: {
      type: "boolean",
      value: false,
      label: "Is Bulk Update Default Location Pending",
    },
    isEventTypesFetching: {
      type: "boolean",
      value: false,
      label: "Is Event Types Fetching",
    },
  });

  const mockData = {
    items: [
      {
        name: "Google Calendar",
        description: "Connect your Google Calendar",
        logo: "https://example.com/google-calendar-logo.png",
        slug: "google-calendar",
        type: "google_calendar",
        userCredentialIds: [1],
        teams: [],
        invalidCredentialIds: [],
      },
    ],
  };

  const mockDefaultConferencingApp = {
    appSlug: "zoom",
  };

  const mockEventTypes = [
    { id: 1, title: "Meeting" },
    { id: 2, title: "Interview" },
  ];

  return (
    <AppList
      variant={state.variant.value as any}
      data={mockData as any}
      handleDisconnect={() => {}}
      listClassName={state.listClassName.value}
      defaultConferencingApp={mockDefaultConferencingApp as any}
      handleUpdateUserDefaultConferencingApp={() => {}}
      handleBulkUpdateDefaultLocation={() => {}}
      isBulkUpdateDefaultLocationPending={state.isBulkUpdateDefaultLocationPending.value}
      eventTypes={mockEventTypes}
      isEventTypesFetching={state.isEventTypesFetching.value}
      handleConnectDisconnectIntegrationMenuToggle={() => {}}
      handleBulkEditDialogToggle={() => {}}
    />
  );
}