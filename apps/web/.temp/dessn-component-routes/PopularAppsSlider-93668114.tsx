import React from 'react';
import { useParentState } from '../useIframeState';
import { PopularAppsSlider } from '../../../../packages/ui/components/apps/PopularAppsSlider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    items: {
      type: "string",
      value: JSON.stringify([
        {
          name: "Google Calendar",
          description: "Connect your Google Calendar",
          type: "google_calendar",
          variant: "calendar",
          logo: "https://example.com/google-calendar-logo.png",
          publisher: "Google",
          url: "https://calendar.google.com",
          verified: true,
          rating: 4.8,
          reviews: 1000,
          slug: "google-calendar",
          categories: ["calendar"],
          email: "support@google.com",
          installCount: 5000
        },
        {
          name: "Zoom",
          description: "Video meetings for your team",
          type: "zoom_video",
          variant: "video",
          logo: "https://example.com/zoom-logo.png",
          publisher: "Zoom",
          url: "https://zoom.us",
          verified: true,
          rating: 4.5,
          reviews: 800,
          slug: "zoom",
          categories: ["video"],
          email: "support@zoom.us",
          installCount: 4000
        },
        {
          name: "Stripe",
          description: "Online payment processing",
          type: "stripe_payment",
          variant: "payment",
          logo: "https://example.com/stripe-logo.png",
          publisher: "Stripe",
          url: "https://stripe.com",
          verified: true,
          rating: 4.7,
          reviews: 1200,
          slug: "stripe",
          categories: ["payment"],
          email: "support@stripe.com",
          installCount: 3000
        }
      ]),
      label: "Apps",
    },
  });

  const items = JSON.parse(state.items.value);

  return <PopularAppsSlider items={items} />;
}