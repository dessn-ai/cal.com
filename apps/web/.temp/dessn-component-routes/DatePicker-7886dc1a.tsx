import React from 'react';
import { useParentState } from '../useIframeState';
import { DatePicker } from '../../../../packages/features/bookings/Booker/components/DatePicker';
import { AtomsWrapper } from '../../../../packages/platform/atoms/src/components/atoms-wrapper';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventData: {
      type: 'string',
      value: JSON.stringify({ subsetOfUsers: [{ weekStart: 'MONDAY' }] }),
      label: 'Event Data',
    },
    scheduleData: {
      type: 'string',
      value: JSON.stringify({ slots: [] }),
      label: 'Schedule Data',
    },
    isPending: {
      type: 'boolean',
      value: false,
      label: 'Is Pending',
    },
    isError: {
      type: 'boolean',
      value: false,
      label: 'Is Error',
    },
    isSuccess: {
      type: 'boolean',
      value: true,
      label: 'Is Success',
    },
    isLoading: {
      type: 'boolean',
      value: false,
      label: 'Is Loading',
    },
  });

  const event = {
    data: JSON.parse(state.eventData.value),
  };

  const schedule = {
    data: JSON.parse(state.scheduleData.value),
    isPending: state.isPending.value,
    isError: state.isError.value,
    isSuccess: state.isSuccess.value,
    isLoading: state.isLoading.value,
  };

  const classNames = {
    datePickerContainer: 'custom-container',
    datePickerTitle: 'custom-title',
    datePickerDays: 'custom-days',
    datePickerDate: 'custom-date',
    datePickerDatesActive: 'custom-dates-active',
    datePickerToggle: 'custom-toggle',
  };

  const scrollToTimeSlots = () => {
    console.log('Scrolling to time slots');
  };

  return (
    <AtomsWrapper>
      <DatePicker
        event={event}
        schedule={schedule}
        classNames={classNames}
        scrollToTimeSlots={scrollToTimeSlots}
      />
    </AtomsWrapper>
  );
}