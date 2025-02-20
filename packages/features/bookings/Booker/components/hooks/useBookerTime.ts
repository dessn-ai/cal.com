export const useBookerTime = () => {
  return {
    timezone: "UTC",
    timeFormat: "h:mm A",
    timezoneFromBookerStore: "UTC",
    timezoneFromTimePreferences: "UTC"
  };
};