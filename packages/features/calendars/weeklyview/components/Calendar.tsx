import React from "react";

interface CalendarProps {
  startDate?: Date;
  endDate?: Date;
  selectedDate?: Date;
  events?: any[];
  availableTimeslots?: any[];
  timezone?: string;
  startHour?: number;
  endHour?: number;
  gridCellsPerHour?: number;
}

export function Calendar(props: CalendarProps) {
  const {
    startDate,
    endDate,
    selectedDate,
    events = [],
    availableTimeslots = [],
    timezone = "UTC",
    startHour = 0,
    endHour = 23,
    gridCellsPerHour = 4
  } = props;

  // Safely format date for display
  const formatDate = (date: Date | undefined) => {
    if (!date) return 'Not selected';
    try {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: timezone
      });
    } catch (e) {
      return 'Invalid date';
    }
  };

  return (
    <div className="calendar-mock border rounded-lg p-4 bg-white">
      <div className="text-lg font-semibold mb-4">Calendar View (Mock)</div>
      <div className="grid gap-2">
        <div>Selected Date: {formatDate(selectedDate)}</div>
        <div>Start Date: {formatDate(startDate)}</div>
        <div>End Date: {formatDate(endDate)}</div>
        <div>Time Range: {startHour}:00 - {endHour}:00</div>
        <div>Events: {events.length}</div>
        <div>Available Slots: {availableTimeslots.length}</div>
        <div>Timezone: {timezone}</div>
      </div>
    </div>
  );
}