import React from 'react';
import { useParentState } from '../useIframeState';
import { DatePicker } from '../../../../packages/features/bookings/Booker/components/DatePicker';

import dayjs from '@calcom/dayjs';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    event: {
      type: 'dropdown',
      value: 'withData',
      options: ['withData', 'withoutData'],
      label: 'Event Data',
    },
    scheduleStatus: {
      type: 'dropdown',
      value: 'success',
      options: ['success', 'pending', 'error', 'loading'],
      label: 'Schedule Status',
    },
    weekStart: {
      type: 'dropdown',
      value: 'Sunday',
      options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      label: 'Week Start',
    },
  });

  const event = state.event.value === 'withData' 
    ? { data: { subsetOfUsers: [{ weekStart: state.weekStart.value }] } }
    : { data: undefined };

  const schedule = {
    data: {
      slots: {
        [dayjs().format('YYYY-MM-DD')]: [
          { time: '09:00:00', attendees: 1 },
          { time: '10:00:00', attendees: 0 },
        ],
      },
    },
    isPending: state.scheduleStatus.value === 'pending',
    isError: state.scheduleStatus.value === 'error',
    isSuccess: state.scheduleStatus.value === 'success',
    isLoading: state.scheduleStatus.value === 'loading',
  };

  const classNames = {
    datePickerContainer: 'custom-container',
    datePickerTitle: 'custom-title',
    datePickerDays: 'custom-days',
    datePickerDate: 'custom-date',
    datePickerDatesActive: 'custom-dates-active',
    datePickerToggle: 'custom-toggle',
  };

  return (
    <DatePicker
      event={event}
      schedule={schedule}
      classNames={classNames}
      scrollToTimeSlots={() => console.log('Scrolling to time slots')}
    />
  );
}