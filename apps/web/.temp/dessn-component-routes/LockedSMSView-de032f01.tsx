import React, { useState, createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { Button, TextField } from "@calcom/ui";

// Create mock TRPC context
const MockTRPCContext = createContext({
  useContext: () => ({
    viewer: {
      admin: {
        getSMSLockStateTeamsUsers: {
          invalidate: () => Promise.resolve(),
        },
      },
    },
  }),
  viewer: {
    admin: {
      setSMSLockState: {
        useMutation: ({ onSuccess, onError }: any) => ({
          mutate: (params: any) => {
            console.log('Mutation called with params:', params);
            onSuccess?.({
              name: params.username || 'User',
              locked: true,
            });
          },
          isLoading: false,
        }),
      },
    },
  },
});

// Mock the showToast function
const showToast = (message: string, type: string) => {
  console.log(`Toast: ${message}, type: ${type}`);
};

// Mock the entire component instead of importing
const MockLockedSMSView = () => {
  const [username, setUsername] = useState("");
  const [teamSlug, setTeamSlug] = useState("");
  const mockTrpc = useContext(MockTRPCContext);

  const handleLockUser = () => {
    showToast(`${username} successfully locked`, "success");
    setUsername("");
  };

  const handleLockTeam = () => {
    showToast(`Team ${teamSlug} successfully locked`, "success");
    setTeamSlug("");
  };

  return (
    <div>
      <div className="mb-4 flex w-full items-center justify-between space-x-2 rtl:space-x-reverse">
        <div className="flex">
          <TextField
            name="Lock User"
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          <Button
            type="submit"
            className="ml-2 mt-5"
            onClick={handleLockUser}>
            Lock User
          </Button>
        </div>
        <div className="flex">
          <TextField
            name="Lock Team"
            placeholder="team slug"
            onChange={(event) => setTeamSlug(event.target.value)}
            value={teamSlug}
          />
          <Button
            type="submit"
            className="ml-2 mt-5"
            onClick={handleLockTeam}>
            Lock Team
          </Button>
        </div>
      </div>
      
      {/* Mock Users Table */}
      <div className="border rounded-md">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">User/Team</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div>John Doe</div>
                    <div className="text-gray-500">john_doe</div>
                  </div>
                </div>
              </td>
              <td className="p-4">Locked</td>
              <td className="p-4">
                <Button
                  onClick={() => showToast("User unlocked successfully", "success")}
                  >
                  Unlock
                </Button>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div>Team Alpha</div>
                    <div className="text-gray-500">/team/alpha</div>
                  </div>
                </div>
              </td>
              <td className="p-4">Review Needed</td>
              <td className="p-4">
                <Button
                  onClick={() => showToast("Team reviewed successfully", "success")}
                  >
                  Mark as Reviewed
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  const mockTrpcValue = {
    useContext: () => ({
      viewer: {
        admin: {
          getSMSLockStateTeamsUsers: {
            invalidate: () => Promise.resolve(),
          },
        },
      },
    }),
    viewer: {
      admin: {
        setSMSLockState: {
          useMutation: ({ onSuccess, onError }: any) => ({
            mutate: (params: any) => {
              console.log('Mutation called with params:', params);
              onSuccess?.({
                name: params.username || 'User',
                locked: true,
              });
            },
            isLoading: false,
          }),
        },
      },
    },
  };

  return (
    <MockTRPCContext.Provider value={mockTrpcValue}>
      <div className="p-6">
        <MockLockedSMSView />
      </div>
    </MockTRPCContext.Provider>
  );
}