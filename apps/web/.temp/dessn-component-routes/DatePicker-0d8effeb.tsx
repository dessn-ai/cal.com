import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/calendars/DatePicker';

import dayjs from '@calcom/dayjs';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    weekStart: {
      type: "number",
      value: 0,
      label: "Week Start",
    },
    locale: {
      type: "string",
      value: "en-US",
      label: "Locale",
    },
    minDate: {
      type: "string",
      value: dayjs().format('YYYY-MM-DD'),
      label: "Min Date",
    },
    maxDate: {
      type: "string",
      value: dayjs().add(1, 'year').format('YYYY-MM-DD'),
      label: "Max Date",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    eventSlug: {
      type: "string",
      value: "sample-event",
      label: "Event Slug",
    },
  });

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    console.log("Date changed:", date);
  };

  const handleMonthChange = (date: dayjs.Dayjs) => {
    console.log("Month changed:", date);
  };

  return (
    <ImportedComponent
      weekStart={state.weekStart.value as 0 | 1 | 2 | 3 | 4 | 5 | 6}
      onChange={handleDateChange}
      onMonthChange={handleMonthChange}
      selected={null}
      minDate={new Date(state.minDate.value)}
      maxDate={new Date(state.maxDate.value)}
      locale={state.locale.value}
      excludedDates={[]}
      includedDates={[]}
      isPending={state.isPending.value}
      eventSlug={state.eventSlug.value}
    />
  );
}