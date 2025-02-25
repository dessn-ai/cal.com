export enum TimeFormat {
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h"
}

export interface Person {
  name: string;
  email: string;
  timeZone: string;
  language: {
    translate: (key: string, vars?: Record<string, string | number>) => string;
    locale: string;
  };
}

export interface CalendarEvent {
  type: string;
  title: string;
  startTime: string;
  endTime: string;
  organizer: Person;
  attendees: Person[];
  location: string;
  uid: string;
  additionalNotes?: string;
  cancellationReason?: string;
  team?: {
    name: string;
    members: Person[];
  };
  recurringEvent: null | {
    count: number;
    freq: string;
    interval: number;
  };
  platformClientId: string | null;
}