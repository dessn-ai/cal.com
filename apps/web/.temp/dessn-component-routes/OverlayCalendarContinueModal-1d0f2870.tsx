import React from 'react';
import { useParentState } from '../useIframeState';
import { OverlayCalendarContinueModal } from '../../../../packages/features/bookings/Booker/components/OverlayCalendar/OverlayCalendarContinueModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
  });

  const handleClose = (state: boolean) => {
    setState('open', state);
  };

  const handleContinue = () => {
    console.log('Continue clicked');
  };

  return (
    <OverlayCalendarContinueModal
      open={state.open.value}
      onClose={handleClose}
      onContinue={handleContinue}
    />
  );
}