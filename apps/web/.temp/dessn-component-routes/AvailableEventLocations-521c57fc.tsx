import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailableEventLocations } from '../../../../packages/features/bookings/components/event-meta/AvailableEventLocations';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    locations: {
      type: "string",
      value: JSON.stringify([
        {
          type: "inPerson",
          address: "123 Main St, City, Country",
          displayLocationPublicly: true,
        },
        {
          type: "video",
          link: "https://zoom.us/j/1234567890",
        },
        {
          type: "phone",
          hostPhoneNumber: "+1234567890",
        }
      ]),
      label: "Locations",
    },
  });

  const locations = JSON.parse(state.locations.value);

  return <AvailableEventLocations locations={locations} />;
}