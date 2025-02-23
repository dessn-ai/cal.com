import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/Locations';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: "object",
      value: { id: 1 },
      label: "Team",
    },
    destinationCalendar: {
      type: "object",
      value: { integration: "google_calendar" },
      label: "Destination Calendar",
    },
    showAppStoreLink: {
      type: "boolean",
      value: true,
      label: "Show App Store Link",
    },
    isChildrenManagedEventType: {
      type: "boolean",
      value: false,
      label: "Is Children Managed Event Type",
    },
    isManagedEventType: {
      type: "boolean",
      value: false,
      label: "Is Managed Event Type",
    },
    disableLocationProp: {
      type: "boolean",
      value: false,
      label: "Disable Location Prop",
    },
    eventType: {
      type: "object",
      value: { locations: [] },
      label: "Event Type",
    },
    locationOptions: {
      type: "object",
      value: [
        {
          label: "Default",
          options: [
            { label: "In-person meeting", value: "inPerson" },
            { label: "Phone call", value: "phone" },
          ],
        },
      ],
      label: "Location Options",
    },
  });

  const { control, getValues, setValue, formState } = useForm<any>({
    defaultValues: {
      locations: [],
    },
  });

  return (
    <ImportedComponent
      team={state.team.value}
      destinationCalendar={state.destinationCalendar.value}
      showAppStoreLink={state.showAppStoreLink.value}
      isChildrenManagedEventType={state.isChildrenManagedEventType.value}
      isManagedEventType={state.isManagedEventType.value}
      disableLocationProp={state.disableLocationProp.value}
      getValues={getValues}
      setValue={setValue}
      control={control}
      formState={formState}
      eventType={state.eventType.value}
      locationOptions={state.locationOptions.value}
    />
  );
}