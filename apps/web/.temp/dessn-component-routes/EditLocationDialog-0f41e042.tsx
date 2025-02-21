import React from 'react';
import { useParentState } from '../useIframeState';
import { EditLocationDialog } from '../../components/dialog/EditLocationDialog';

import { DefaultEventLocationTypeEnum } from '@calcom/app-store/locations';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    saveLocation: {
      type: "dropdown",
      value: "mock",
      options: ["mock", "real"],
      label: "Save Location Function",
    },
    selection: {
      type: "dropdown",
      value: "attendeeInPerson",
      options: Object.values(DefaultEventLocationTypeEnum),
      label: "Selection",
    },
    bookingLocation: {
      type: "string",
      value: "Conference Room A",
      label: "Booking Location",
    },
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Dialog Open",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
  });

  const mockSaveLocation = async ({ newLocation, credentialId }) => {
    console.log("Saving location:", newLocation, credentialId);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <EditLocationDialog
      saveLocation={state.saveLocation.value === "mock" ? mockSaveLocation : async () => {}}
      selection={{
        label: "Selected Location",
        value: state.selection.value,
        icon: "https://example.com/icon.png",
      }}
      booking={{
        location: state.bookingLocation.value,
      }}
      setShowLocationModal={(show) => setState("isOpenDialog", show)}
      isOpenDialog={state.isOpenDialog.value}
      setSelectedLocation={() => {}}
      setEditingLocationType={() => {}}
      teamId={state.teamId.value}
    />
  );
}