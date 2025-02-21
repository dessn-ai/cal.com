import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/TeamAvailabilityTimes';

import dayjs from '@calcom/dayjs';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    memberId: {
      type: "number",
      value: 1,
      label: "Member ID",
    },
    selectedDate: {
      type: "string",
      value: dayjs().format('YYYY-MM-DD'),
      label: "Selected Date",
    },
    selectedTimeZone: {
      type: "dropdown",
      value: "America/New_York",
      options: ["America/New_York", "Europe/London", "Asia/Tokyo"],
      label: "Selected Time Zone",
    },
    frequency: {
      type: "number",
      value: 30,
      label: "Frequency (minutes)",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <ImportedComponent
      teamId={state.teamId.value}
      memberId={state.memberId.value}
      selectedDate={dayjs(state.selectedDate.value)}
      selectedTimeZone={{ value: state.selectedTimeZone.value, label: state.selectedTimeZone.value }}
      frequency={state.frequency.value}
      className={state.className.value}
    />
  );
}