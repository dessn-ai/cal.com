export const useInsightsOrgTeams = () => ({
  teams: [
    {
      id: 1,
      name: "Mock Team",
      slug: "mock-team",
      members: [{ id: 1, name: "Mock User" }]
    }
  ],
  isLoading: false,
  error: null,
  orgMembers: [{ id: 1, name: "Mock User" }],
  currentTeam: {
    id: 1,
    name: "Mock Team",
    slug: "mock-team",
  }
});