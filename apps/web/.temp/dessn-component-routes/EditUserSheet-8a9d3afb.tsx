import React from 'react';
import { useParentState } from '../useIframeState';

// Create a mock version of EditUserSheet that doesn't depend on the OrgBrandingProvider
const MockEditUserSheet = ({ state }) => {
  const user = state.editSheet.user;
  
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <div className="mt-1">{user.username}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1">{user.email}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <div className="mt-1">{user.role}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time Zone</label>
          <div className="mt-1">{user.timeZone}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Teams</label>
          <div className="mt-1">
            {user.teams.map(team => (
              <span key={team.id} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {team.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    editSheet: {
      type: "object",
      value: {
        showModal: true,
        user: {
          id: 1,
          username: "johndoe",
          email: "john@example.com",
          timeZone: "America/New_York",
          role: "MEMBER",
          avatarUrl: null,
          accepted: true,
          disableImpersonation: false,
          completedOnboarding: true,
          lastActiveAt: new Date().toISOString(),
          teams: [
            { id: 1, name: "Team A", slug: "team-a" },
            { id: 2, name: "Team B", slug: "team-b" }
          ],
          attributes: [
            {
              id: "1",
              attributeId: "attr1",
              value: "Value 1",
              slug: "value-1",
              weight: 1,
              contains: ["value1"]
            }
          ]
        }
      },
      label: "Edit Sheet State"
    }
  });

  const mockDispatch = React.useCallback(() => {
    console.log("Dispatch called");
  }, []);

  return (
    <MockEditUserSheet
      state={{
        changeMemberRole: { showModal: false },
        deleteMember: { showModal: false },
        impersonateMember: { showModal: false },
        inviteMember: { showModal: false },
        editSheet: state.editSheet.value
      }}
      dispatch={mockDispatch}
    />
  );
}