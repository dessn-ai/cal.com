import React from 'react';
import { useParentState } from '../useIframeState';
import dayjs from '@calcom/dayjs';

// Mock a simplified version of the calendar for preview
const MockCalendar = ({ startDate, endDate }: { startDate: Date; endDate: Date }) => {
  const days = [];
  let currentDate = dayjs(startDate);
  const lastDate = dayjs(endDate);

  while (currentDate.isBefore(lastDate) || currentDate.isSame(lastDate, 'day')) {
    days.push(currentDate);
    currentDate = currentDate.add(1, 'day');
  }

  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div
            key={day.format('YYYY-MM-DD')}
            className="border p-2 min-h-[100px] text-sm"
          >
            <div className="font-medium">{day.format('ddd')}</div>
            <div>{day.format('D')}</div>
            {/* Mock events */}
            <div className="mt-2 space-y-1">
              <div className="bg-blue-100 p-1 rounded text-xs">9:00 AM Meeting</div>
              <div className="bg-green-100 p-1 rounded text-xs">2:00 PM Call</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({
    extraDays: {
      type: "number",
      value: 7,
      label: "Extra Days",
    },
  });

  const startDate = dayjs().startOf('day').toDate();
  const endDate = dayjs().add(state.extraDays.value - 1, 'days').endOf('day').toDate();

  return (
    <div className="h-[600px] w-full overflow-auto p-4">
      <div className="text-center mb-4">
        <h2 className="text-lg font-medium">Calendar Preview</h2>
        <p className="text-sm text-gray-500">
          Showing {state.extraDays.value} days from {dayjs(startDate).format('MMM D, YYYY')}
        </p>
      </div>
      <MockCalendar startDate={startDate} endDate={endDate} />
    </div>
  );
}