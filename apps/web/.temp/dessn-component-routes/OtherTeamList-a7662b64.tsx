import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/components/OtherTeamList';

// Mock I18nProvider component
const I18nProvider = ({ children }) => {
  return <>{children}</>;
};

// Create a wrapped version of the component that provides branding data directly
const WrappedComponent = ({ teams, pending }) => {
  // Mock the branding data that would normally come from the hook
  const brandingData = {
    orgBranding: {
      theme: null,
      logo: '',
      brandColor: '#292929',
      darkBrandColor: '#ffffff',
    },
    isLoading: false,
  };

  // Create a wrapped version of any child components that might use the hook
  const WrappedTeamListItem = ({ team }) => {
    return (
      <div className="flex items-center justify-between p-5 border-b last:border-b-0">
        <div>
          <h3 className="text-sm font-medium">{team.name}</h3>
          <p className="text-xs text-gray-500">{team.members?.length || 0} members</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white border rounded-md">
      {teams.map((team) => (
        <WrappedTeamListItem key={team.id} team={team} />
      ))}
      {pending && <div className="p-5 text-sm text-gray-500">Loading...</div>}
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
    }
  });

  const teams = JSON.parse(state.teams.value);

  return (
    <I18nProvider>
      <WrappedComponent teams={teams} pending={state.pending.value} />
    </I18nProvider>
  );
}