import { useSession } from "next-auth/react";
import { useMemo } from "react";

import dayjs from "@calcom/dayjs";
import { Calendar } from "@calcom/features/calendars/weeklyview";
import type { CalendarAvailableTimeslots } from "@calcom/features/calendars/weeklyview/types/state";
import { BookingStatus } from "@calcom/prisma/enums";
import { trpc } from "@calcom/trpc";

import { useTimePreferences } from "../../bookings/lib/timePreferences";
import { useSchedule } from "../../schedules/lib/use-schedule";
import { useTroubleshooterStore } from "../store";

export const LargeCalendar = ({ extraDays }: { extraDays: number }) => {
  const { timezone = 'UTC' } = useTimePreferences();
  const selectedDate = useTroubleshooterStore((state) => state.selectedDate);
  const event = useTroubleshooterStore((state) => state.event);
  
  // Create fixed dates for the calendar
  const baseDate = dayjs().startOf('day');
  const startDate = baseDate.toDate();
  const endDate = baseDate.add(extraDays - 1, 'days').endOf('day').toDate();

  // Mock events for preview
  const events = useMemo(() => {
    return Array.from({ length: 3 }).map((_, idx) => ({
      id: idx,
      title: `Mock Event ${idx + 1}`,
      start: baseDate.add(idx + 1, 'hours').toDate(),
      end: baseDate.add(idx + 2, 'hours').toDate(),
      options: {
        borderColor: "black",
        status: BookingStatus.ACCEPTED,
      },
    }));
  }, [baseDate]);

  // Mock available slots
  const availableSlots = useMemo(() => {
    const slots: CalendarAvailableTimeslots = {};
    const currentDate = baseDate.format('YYYY-MM-DD');
    
    slots[currentDate] = [
      {
        start: baseDate.add(9, 'hours').toDate(),
        end: baseDate.add(10, 'hours').toDate(),
      },
      {
        start: baseDate.add(14, 'hours').toDate(),
        end: baseDate.add(15, 'hours').toDate(),
      }
    ];
    
    return slots;
  }, [baseDate]);

  return (
    <div className="h-full [--calendar-dates-sticky-offset:66px]">
      <Calendar
        startDate={startDate}
        endDate={endDate}
        events={events}
        startHour={0}
        endHour={23}
        gridCellsPerHour={4}
        availableTimeslots={availableSlots}
        hideHeader={true}
        timezone={timezone}
      />
    </div>
  );
};