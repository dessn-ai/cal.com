import { useEffect } from "react";
import * as React from "react";
import { create } from "zustand";

import dayjs from "@calcom/dayjs";

import { updateQueryParam, getQueryParam, removeQueryParam } from "../bookings/Booker/utils/query-param";

/**
 * Arguments passed into store initializer, containing
 * the event data.
 */
type StoreInitializeType = {
  month: string | null;
};

type EventType = {
  id: number;
  slug: string;
  duration: number;
};

export type TroubleshooterStore = {
  event: EventType | null;
  setEvent: (eventSlug: EventType) => void;
  month: string | null;
  setMonth: (month: string | null) => void;
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
  addToSelectedDate: (days: number) => void;
  initialize: (data: StoreInitializeType) => void;
  calendarToColorMap: Record<string, string>;
  addToCalendarToColorMap: (calendarId: string | undefined, color: string) => void;
};

/**
 * The booker store contains the data of the component's
 * current state. This data can be reused within child components
 * by importing this hook.
 *
 * See comments in interface above for more information on it's specific values.
 */
export const useTroubleshooterStore = create<TroubleshooterStore>((set, get) => ({
  selectedDate: getQueryParam("date") || null,
  setSelectedDate: (selectedDate: string | null) => {
    // unset selected date
    if (!selectedDate) {
      removeQueryParam("date");
      return;
    }

    const currentSelection = dayjs(get().selectedDate);
    const newSelection = dayjs(selectedDate);
    set({ selectedDate });
    updateQueryParam("date", selectedDate ?? "");

    // Setting month make sure small calendar in fullscreen layouts also updates.
    if (newSelection.month() !== currentSelection.month()) {
      set({ month: newSelection.format("YYYY-MM") });
      updateQueryParam("month", newSelection.format("YYYY-MM"));
    }
  },
  addToSelectedDate: (days: number) => {
    const selectedDate = get().selectedDate;
    const currentSelection = selectedDate ? dayjs(get().selectedDate) : dayjs();
    const newSelection = currentSelection.add(days, "day");
    const newSelectionFormatted = newSelection.format("YYYY-MM-DD");

    if (newSelection.month() !== currentSelection.month()) {
      set({ month: newSelection.format("YYYY-MM") });
      updateQueryParam("month", newSelection.format("YYYY-MM"));
    }

    set({ selectedDate: newSelectionFormatted });
    updateQueryParam("date", newSelectionFormatted);
  },
  event: null,
  setEvent: (event: EventType) => {
    set({ event });
    updateQueryParam("eventType", event.slug ?? "");
  },
  month: getQueryParam("month") || getQueryParam("date") || dayjs().format("YYYY-MM"),
  setMonth: (month: string | null) => {
    set({ month });
    updateQueryParam("month", month ?? "");
    get().setSelectedDate(null);
  },
  initialize: ({ month }: StoreInitializeType) => {
    if (month) {
      set({ month });
      updateQueryParam("month", month);
    }
  },
  calendarToColorMap: {},
  addToCalendarToColorMap: (calendarId: string | undefined, color: string) => {
    if (!calendarId) return;
    const calendarToColorMap = get().calendarToColorMap;
    calendarToColorMap[calendarId] = color;
    set({ calendarToColorMap });
  },
}));

export const useInitalizeTroubleshooterStore = ({ month }: StoreInitializeType) => {
  const initializeStore = useTroubleshooterStore((state) => state.initialize);
  useEffect(() => {
    initializeStore({
      month,
    });
  }, [initializeStore, month]);
};

export const TroubleshooterStoreProvider: React.FC<{ children: React.ReactNode; initialState?: Partial<TroubleshooterStore> }> = ({ 
  children,
  initialState 
}) => {
  useEffect(() => {
    if (initialState) {
      const store = useTroubleshooterStore.getState();
      Object.entries(initialState).forEach(([key, value]) => {
        if (typeof store[key as keyof TroubleshooterStore] === 'function') {
          // If it's a function (like setEvent), we don't want to override it
          return;
        }
        useTroubleshooterStore.setState({ [key]: value });
      });
    }
  }, [initialState]);

  return <React.Fragment>{children}</React.Fragment>;
};