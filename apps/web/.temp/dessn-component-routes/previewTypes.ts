export enum TimeFormat {
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h",
}

export type User = {
  id: number;
  name: string;
  email: string;
  avatar: string | null;
  username: string;
};

export type EventType = {
  eventTypeId: number;
  eventTypeName: string;
  count: number;
};

export type MemberBooking = {
  userId: number;
  user: User;
  count: number;
};