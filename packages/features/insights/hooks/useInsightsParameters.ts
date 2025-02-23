export const useInsightsParameters = () => {
  return {
    isAll: true,
    teamId: undefined,
    userId: undefined,
    startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    endDate: new Date(),
    dateRangePreset: 'm',
    eventTypeId: undefined,
  };
};