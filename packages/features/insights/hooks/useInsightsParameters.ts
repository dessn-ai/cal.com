export const useInsightsParameters = () => ({
  startDate: new Date().toISOString(),
  endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
  teamId: 1,
  userId: 1,
  isAll: false,
  memberUserId: 1,
  eventTypeId: 1
});