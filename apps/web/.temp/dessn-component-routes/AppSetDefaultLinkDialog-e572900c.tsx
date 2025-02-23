import React from 'react';
import { useParentState } from '../useIframeState';
import { AppSetDefaultLinkDialog } from '../../../../packages/features/apps/components/AppSetDefaultLinkDialog';

import { DefaultEventLocationTypeEnum, EventLocationType } from '@calcom/app-store/locations';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    locationType: {
      type: "dropdown",
      value: "link",
      options: Object.values(DefaultEventLocationTypeEnum),
      label: "Location Type",
    },
    slug: {
      type: "string",
      value: "zoom",
      label: "App Slug",
    },
    label: {
      type: "string",
      value: "Zoom Meeting",
      label: "Label",
    },
    organizerInputPlaceholder: {
      type: "string",
      value: "https://zoom.us/j/1234567890",
      label: "Organizer Input Placeholder",
    },
  });

  const locationType: EventLocationType & { slug: string } = {
    type: state.locationType.value as DefaultEventLocationTypeEnum,
    slug: state.slug.value,
    label: state.label.value,
    organizerInputPlaceholder: state.organizerInputPlaceholder.value,
    default: true,
    messageForOrganizer: "This is a message for the organizer",
    category: "conferencing",
    linkType: "static",
    iconUrl: "https://example.com/icon.png",
    variable: "locationType",
    defaultValueVariable: "link",
    organizerInputType: "text",
  };

  return (
    <AppSetDefaultLinkDialog
      locationType={locationType}
      setLocationType={() => {}}
      onSuccess={() => console.log("Success")}
      handleUpdateUserDefaultConferencingApp={() => console.log("Updating user default conferencing app")}
    />
  );
}