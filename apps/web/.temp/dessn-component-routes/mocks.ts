export const SchedulingType = {
  ROUND_ROBIN: "ROUND_ROBIN",
  COLLECTIVE: "COLLECTIVE",
  MANAGED: "MANAGED"
} as const;

export type SchedulingType = typeof SchedulingType[keyof typeof SchedulingType];