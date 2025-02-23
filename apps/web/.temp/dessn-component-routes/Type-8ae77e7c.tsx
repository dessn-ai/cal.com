import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/d/[link]/d-type-view';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "example-event",
      label: "Slug",
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
    user: {
      type: "string",
      value: "johndoe",
      label: "User",
    },
    isBrandingHidden: {
      type: "boolean",
      value: false,
      label: "Is Branding Hidden",
    },
    isTeamEvent: {
      type: "boolean",
      value: false,
      label: "Is Team Event",
    },
    duration: {
      type: "number",
      value: 60,
      label: "Duration",
    },
    hashedLink: {
      type: "string",
      value: "abc123",
      label: "Hashed Link",
    },
  });

  // Mock objects for complex props
  const mockBooking = {};
  const mockEntity = {};
  const mockDurationConfig = [15, 30, 45, 60]; // Changed to array of common duration values

  return (
    <ImportedComponent
      slug={state.slug.value}
      isEmbed={state.isEmbed.value}
      user={state.user.value}
      booking={mockBooking}
      isBrandingHidden={state.isBrandingHidden.value}
      isTeamEvent={state.isTeamEvent.value}
      entity={mockEntity}
      duration={state.duration.value}
      hashedLink={state.hashedLink.value}
      durationConfig={mockDurationConfig}
    />
  );
}