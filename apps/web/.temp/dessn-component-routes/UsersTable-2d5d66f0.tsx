import React from 'react';
import { useParentState } from '../useIframeState';
import { Avatar, DropdownActions, Table } from "@calcom/ui";

// Mock the SMSLockState enum
enum SMSLockState {
  LOCKED = "LOCKED",
  UNLOCKED = "UNLOCKED",
  REVIEW_NEEDED = "REVIEW_NEEDED"
}

const { Cell, ColumnTitle, Header, Row } = Table;

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
        username: "testuser",
        name: "Test User",
        email: "test@example.com",
        smsLockState: SMSLockState.LOCKED,
        avatarUrl: null
      }
    ],
    reviewNeeded: [
      {
        id: 2,
        username: "reviewuser",
        name: "Review User",
        email: "review@example.com",
        smsLockState: SMSLockState.REVIEW_NEEDED,
        avatarUrl: null
      }
    ]
  },
  teams: {
    locked: [
      {
        id: 1,
        name: "Locked Team",
        smsLockState: SMSLockState.LOCKED,
        slug: "locked-team",
        logoUrl: null
      }
    ],
    reviewNeeded: []
  }
};

// Mock helper functions
const getUserAvatarUrl = (user: User) => user.avatarUrl || `https://avatar.vercel.sh/${user.email}`;
const getPlaceholderAvatar = (logoUrl: string | null | undefined, name: string) => 
  logoUrl || `https://avatar.vercel.sh/${name}`;

const UsersTablePreview = ({ 
  setSMSLockState 
}: { 
  setSMSLockState: (param: { userId?: number; teamId?: number; lock: boolean }) => void 
}) => {
  const usersAndTeams = mockData;
  
  if (!usersAndTeams) {
    return <></>;
  }

  const users = usersAndTeams.users.locked.concat(usersAndTeams.users.reviewNeeded);
  const teams = usersAndTeams.teams.locked.concat(usersAndTeams.teams.reviewNeeded);

  function getActions({ user, team }: { user?: User; team?: Team }) {
    const smsLockState = user?.smsLockState ?? team?.smsLockState;
    if (!smsLockState) return [];

    const actions = [
      {
        id: "unlock-sms",
        label: smsLockState === SMSLockState.LOCKED ? "Unlock SMS sending" : "Lock SMS sending",
        onClick: () =>
          setSMSLockState({
            userId: user ? user.id : undefined,
            teamId: team ? team.id : undefined,
            lock: smsLockState !== SMSLockState.LOCKED,
          }),
        icon: "lock",
      },
    ];
    
    if (smsLockState === SMSLockState.REVIEW_NEEDED) {
      actions.push({
        id: "reviewed",
        label: "Mark as Reviewed",
        onClick: () =>
          setSMSLockState({
            userId: user ? user.id : undefined,
            teamId: team ? team.id : undefined,
            lock: false,
          }),
        icon: "pencil",
      });
    }

    return actions;
  }

  return (
    <Table>
      <Header>
        <ColumnTitle widthClassNames="w-auto">User/Team</ColumnTitle>
        <ColumnTitle>Status</ColumnTitle>
        <ColumnTitle widthClassNames="w-auto">
          <span className="sr-only">Edit</span>
        </ColumnTitle>
      </Header>

      <tbody className="divide-subtle divide-y rounded-md">
        {users.map((user) => (
          <Row key={`user-${user.id}`}>
            <Cell widthClassNames="w-auto">
              <div className="min-h-10 flex items-center">
                <Avatar
                  size="md"
                  alt={`Avatar of ${user.username || "Nameless"}`}
                  imageSrc={getUserAvatarUrl(user)}
                />
                <div className="text-subtle ml-4 font-medium">
                  <span className="text-default">{user.name}</span>
                  <span className="ml-3">/{user.username}</span>
                  <br />
                  <span className="break-all">{user.email}</span>
                </div>
              </div>
            </Cell>
            <Cell>{user.smsLockState}</Cell>
            <Cell widthClassNames="w-auto">
              <DropdownActions actions={getActions({ user })} />
            </Cell>
          </Row>
        ))}
        {teams.map((team) => (
          <Row key={`team-${team.id}`}>
            <Cell widthClassNames="w-auto">
              <div className="min-h-10 flex items-center">
                <Avatar
                  size="md"
                  alt={`Avatar of ${team.name}`}
                  imageSrc={getPlaceholderAvatar(team.logoUrl, team.name)}
                />
                <div className="text-subtle ml-4 font-medium">
                  <span className="text-default">{team.name}</span>
                  <span className="ml-3 break-all">/team/{team.slug}</span>
                </div>
              </div>
            </Cell>
            <Cell>{team.smsLockState}</Cell>
            <Cell widthClassNames="w-auto">
              <DropdownActions actions={getActions({ team })} />
            </Cell>
          </Row>
        ))}
      </tbody>
    </Table>
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

  return <UsersTablePreview setSMSLockState={setSMSLockState} />;
}