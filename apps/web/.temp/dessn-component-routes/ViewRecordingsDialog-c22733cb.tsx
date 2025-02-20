import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/video/ViewRecordingsDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Open Dialog",
    },
    timeFormat: {
      type: "number",
      value: 12,
      label: "Time Format",
    },
  });

  const mockBooking = {
    title: "Sample Booking",
    startTime: new Date().toISOString(),
    endTime: new Date(Date.now() + 3600000).toISOString(),
    references: [
      {
        type: "daily_video",
        meetingId: "sample-meeting-id",
      },
    ],
  };

  return (
    <ImportedComponent
      booking={mockBooking}
      isOpenDialog={state.isOpenDialog.value}
      setIsOpenDialog={(value) => setState('isOpenDialog', value)}
      timeFormat={state.timeFormat.value}
    />
  );
}