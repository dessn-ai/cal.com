import React from 'react';
import { useParentState } from '../useIframeState';
import { RecentAppsSlider } from '../../../../packages/ui/components/apps/RecentAppsSlider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    items: {
      type: "string",
      value: JSON.stringify([
        {
          type: "google_calendar",
          name: "Google Calendar",
          description: "Sync events with Google Calendar",
          variant: "calendar",
          slug: "google-calendar",
          categories: ["calendar"],
          logo: "https://example.com/google-calendar-logo.png",
          publisher: "Google",
          url: "https://calendar.google.com",
          verified: true,
          rating: 4.5,
          reviews: 1000,
          isGlobal: true,
          email: "support@google.com",
          createdAt: "2023-06-01T00:00:00Z"
        },
        {
          type: "zoom_video",
          name: "Zoom",
          description: "Video meetings for your team",
          variant: "video",
          slug: "zoom",
          categories: ["video"],
          logo: "https://example.com/zoom-logo.png",
          publisher: "Zoom",
          url: "https://zoom.us",
          verified: true,
          rating: 4.7,
          reviews: 2000,
          isGlobal: false,
          email: "support@zoom.us",
          createdAt: "2023-05-15T00:00:00Z"
        }
      ]),
      label: "Apps",
    },
  });

  const items = JSON.parse(state.items.value);

  return <RecentAppsSlider items={items} />;
}