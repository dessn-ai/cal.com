import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/components/OtherTeamList';

// Mock I18nProvider since we don't have access to the actual implementation
const I18nProvider = ({ children }) => {
  return <>{children}</>;
};

// Create the context with a default value
const OrgBrandingContext = React.createContext({
  orgBranding: {
    logo: '',
    name: 'Demo Organization',
    brand: {
      brandColor: '#292929',
      darkBrandColor: '#fafafa',
    },
  },
});

// Create the hook that the component will use
export const useOrgBranding = () => {
  return React.useContext(OrgBrandingContext).orgBranding;
};

// Mock the actual provider from Cal.com
const MockOrgBrandingProvider = ({ children }) => {
  return (
    <OrgBrandingContext.Provider
      value={{
        orgBranding: {
          logo: '',
          name: 'Demo Organization',
          brand: {
            brandColor: '#292929',
            darkBrandColor: '#fafafa',
          },
        },
      }}>
      {children}
    </OrgBrandingContext.Provider>
  );
};

// Mock the components that use the branding
const MockOtherTeamList = ({ teams, pending }) => {
  return (
    <div className="space-y-4">
      {teams.map((team) => (
        <div key={team.id} className="rounded-md border p-4">
          <h3 className="text-lg font-medium">{team.name}</h3>
          <p className="text-sm text-gray-500">Members: {team.members.length}</p>
        </div>
      ))}
      {pending && <div>Loading...</div>}
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teams: {
      type: "string",
      value: JSON.stringify([
        { id: 1, name: "Team A", slug: "team-a", members: [{ id: 1, name: "John Doe" }] },
        { id: 2, name: "Team B", slug: "team-b", members: [{ id: 2, name: "Jane Smith" }] },
      ]),
      label: "Teams",
    },
    pending: {
      type: "boolean",
      value: false,
      label: "Pending",
    },
  });

  const teams = JSON.parse(state.teams.value);

  return (
    <MockOrgBrandingProvider>
      <I18nProvider>
        <MockOtherTeamList teams={teams} pending={state.pending.value} />
      </I18nProvider>
    </MockOrgBrandingProvider>
  );
}