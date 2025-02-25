import React from 'react';
import { useParentState } from '../useIframeState';
import { WhenInfo } from '../../../../packages/emails/src/components/WhenInfo';

import { TimeFormat } from '@calcom/lib/timeFormat';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    startTime: {
      type: "string",
      value: new Date().toISOString(),
      label: "Start Time",
    },
    endTime: {
      type: "string",
      value: new Date(Date.now() + 3600000).toISOString(),
      label: "End Time",
    },
    timeZone: {
      type: "string",
      value: "America/New_York",
      label: "Time Zone",
    },
    locale: {
      type: "string",
      value: "en",
      label: "Locale",
    },
    timeFormat: {
      type: "dropdown",
      value: TimeFormat.TWELVE_HOUR,
      options: [TimeFormat.TWELVE_HOUR, TimeFormat.TWENTY_FOUR_HOUR],
      label: "Time Format",
    },
  });

  const mockCalEvent = {
    startTime: state.startTime.value,
    endTime: state.endTime.value,
    attendees: [
      {
        language: {
          translate: (key: string) => key,
          locale: state.locale.value,
        },
      },
    ],
  };

  const mockT = (key: string) => key;

  return (
    <WhenInfo
      calEvent={mockCalEvent}
      timeZone={state.timeZone.value}
      t={mockT}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
    />
  );
}