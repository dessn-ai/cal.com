import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateOrEditOutOfOfficeEntryModal } from '../../../../packages/features/settings/outOfOffice/CreateOrEditOutOfOfficeModal';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    openModal: {
      type: "boolean",
      value: true,
      label: "Open Modal",
    },
    currentlyEditingOutOfOfficeEntry: {
      type: "dropdown",
      value: "null",
      options: ["null", "withData"],
      label: "Editing Entry",
    },
  });

  const methods = useForm();

  const closeModal = () => {
    setState("openModal", false);
  };

  const currentlyEditingOutOfOfficeEntry = state.currentlyEditingOutOfOfficeEntry.value === "withData" 
    ? {
        dateRange: {
          startDate: new Date(),
          endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
        offset: 0,
        toTeamUserId: 1,
        reasonId: 1,
        notes: "Out of office for a week",
        uuid: "123e4567-e89b-12d3-a456-426614174000",
      }
    : null;

  return (
    <CreateOrEditOutOfOfficeEntryModal
      openModal={state.openModal.value}
      closeModal={closeModal}
      currentlyEditingOutOfOfficeEntry={currentlyEditingOutOfOfficeEntry}
    />
  );
}