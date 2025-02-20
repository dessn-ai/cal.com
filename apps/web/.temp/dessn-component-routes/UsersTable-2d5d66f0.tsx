import React from 'react';
import { useParentState } from '../useIframeState';

// Mock the SMSLockState enum
enum SMSLockState {
  LOCKED = "LOCKED",
  REVIEW_NEEDED = "REVIEW_NEEDED",
  UNLOCKED = "UNLOCKED"
}

type User = {
  id: number;
  username: string | null;
  name: string | null;
  email: string;
  smsLockState: SMSLockState;
  avatarUrl: string | null;
};

type Team = {
  id: number;
  name: string;
  smsLockState: SMSLockState;
  slug: string | null;
  logoUrl?: string | null;
};

// Mock data
const mockData = {
  users: {
    locked: [
      {
        id: 1,
        username: "john_doe",
        name: "John Doe",
        email: "john@example.com",
        smsLockState: SMSLockState.LOCKED,
        avatarUrl: null
      }
    ],
    reviewNeeded: [
      {
        id: 2,
        username: "jane_doe",
        name: "Jane Doe",
        email: "jane@example.com",
        smsLockState: SMSLockState.REVIEW_NEEDED,
        avatarUrl: null
      }
    ]
  },
  teams: {
    locked: [
      {
        id: 1,
        name: "Team A",
        smsLockState: SMSLockState.LOCKED,
        slug: "team-a",
        logoUrl: null
      }
    ],
    reviewNeeded: []
  }
};

const MockUsersTable = ({ 
  setSMSLockState 
}: { 
  setSMSLockState: (param: { userId?: number; teamId?: number; lock: boolean }) => void 
}) => {
  const users = [...mockData.users.locked, ...mockData.users.reviewNeeded];
  const teams = [...mockData.teams.locked, ...mockData.teams.reviewNeeded];

  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr>
            <th>User/Team</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={`user-${user.id}`}>
              <td>
                <div>
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                </div>
              </td>
              <td>{user.smsLockState}</td>
              <td>
                <button
                  onClick={() =>
                    setSMSLockState({
                      userId: user.id,
                      lock: user.smsLockState !== SMSLockState.LOCKED,
                    })
                  }
                >
                  {user.smsLockState === SMSLockState.LOCKED ? "Unlock" : "Lock"}
                </button>
              </td>
            </tr>
          ))}
          {teams.map((team) => (
            <tr key={`team-${team.id}`}>
              <td>
                <div>
                  <div>{team.name}</div>
                  <div>{team.slug}</div>
                </div>
              </td>
              <td>{team.smsLockState}</td>
              <td>
                <button
                  onClick={() =>
                    setSMSLockState({
                      teamId: team.id,
                      lock: team.smsLockState !== SMSLockState.LOCKED,
                    })
                  }
                >
                  {team.smsLockState === SMSLockState.LOCKED ? "Unlock" : "Lock"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    setSMSLockState: {
      type: "string",
      value: "Function to set SMS lock state",
      label: "Set SMS Lock State",
    },
  });

  const setSMSLockState = (param: { userId?: number; teamId?: number; lock: boolean }) => {
    console.log("setSMSLockState called with:", param);
  };

  return <MockUsersTable setSMSLockState={setSMSLockState} />;
}