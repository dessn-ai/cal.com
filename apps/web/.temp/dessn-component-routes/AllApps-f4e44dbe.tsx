import React from 'react';
import { useParentState } from '../useIframeState';
import { AllApps } from '../../../../packages/ui/components/apps/AllApps';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    apps: {
      type: "string",
      value: JSON.stringify([
        {
          type: "google_calendar",
          name: "Google Calendar",
          description: "Google Calendar integration",
          variant: "calendar",
          slug: "google-calendar",
          categories: ["calendar"],
          logo: "https://example.com/google-calendar-logo.png",
          publisher: "Google",
          url: "https://calendar.google.com",
          verified: true,
          email: "support@google.com",
        },
        {
          type: "zoom_video",
          name: "Zoom",
          description: "Zoom video conferencing",
          variant: "video",
          slug: "zoom",
          categories: ["video"],
          logo: "https://example.com/zoom-logo.png",
          publisher: "Zoom",
          url: "https://zoom.us",
          verified: true,
          email: "support@zoom.us",
        },
      ]),
      label: "Apps",
    },
    searchText: {
      type: "string",
      value: "",
      label: "Search Text",
    },
    categories: {
      type: "string",
      value: JSON.stringify(["calendar", "video"]),
      label: "Categories",
    },
    userAdminTeams: {
      type: "string",
      value: JSON.stringify([1, 2, 3]),
      label: "User Admin Teams",
    },
  });

  const apps = JSON.parse(state.apps.value);
  const categories = JSON.parse(state.categories.value);
  const userAdminTeams = JSON.parse(state.userAdminTeams.value);

  return (
    <AllApps
      apps={apps}
      searchText={state.searchText.value}
      categories={categories}
      userAdminTeams={userAdminTeams}
    />
  );
}