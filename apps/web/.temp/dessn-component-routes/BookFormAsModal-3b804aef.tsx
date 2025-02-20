import React from 'react';
import { useParentState } from '../useIframeState';
import { BookFormAsModal } from '../../../../packages/features/bookings/Booker/components/BookEventForm/BookFormAsModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    visible: {
      type: "boolean",
      value: true,
      label: "Visible",
    },
  });

  const onCancel = () => {
    setState("visible", false);
  };

  return (
    <BookFormAsModal
      visible={state.visible.value}
      onCancel={onCancel}
    >
      <div>Form content goes here</div>
    </BookFormAsModal>
  );
}