import React, { useState } from 'react';
import { useParentState } from '../useIframeState';

// Mock the UI components
const Button = ({ children, className, onClick, type }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

const TextField = ({ name, placeholder, value, onChange, defaultValue }) => (
  <input
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    defaultValue={defaultValue}
  />
);

const showToast = (message, type) => {
  console.log(`Toast: ${message}, type: ${type}`);
};

// Mock the UsersTable component
const UsersTable = ({ setSMSLockState }) => (
  <div>Mock Users Table</div>
);

// Create the actual component here instead of importing
function LockedSMSView() {
  const [username, setUsername] = useState("");
  const [teamSlug, setTeamSlug] = useState("");

  const utils = {
    viewer: {
      admin: {
        getSMSLockStateTeamsUsers: {
          invalidate: () => {
            console.log("Invalidating query");
          },
        },
      },
    },
  };

  const mutation = {
    mutate: ({ username, teamSlug, lock }) => {
      console.log("Mutation called with:", { username, teamSlug, lock });
      showToast(`Successfully ${lock ? "locked" : "unlocked"}`, "success");
      utils.viewer.admin.getSMSLockStateTeamsUsers.invalidate();
    },
  };

  function setSMSLockState({ userId, teamId, lock }) {
    mutation.mutate({
      userId,
      teamId,
      lock,
    });
  }

  return (
    <div>
      <div className="mb-4 flex w-full items-center justify-between space-x-2 rtl:space-x-reverse">
        <div className="flex">
          <TextField
            name="Lock User"
            placeholder="username"
            defaultValue=""
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          <Button
            type="submit"
            className="ml-2 mt-5"
            onClick={() => {
              mutation.mutate({ username, lock: true });
              utils.viewer.admin.getSMSLockStateTeamsUsers.invalidate();
            }}>
            Lock User
          </Button>
        </div>
        <div className="flex">
          <TextField
            name="Lock Team"
            placeholder="team slug"
            defaultValue=""
            onChange={(event) => {
              setTeamSlug(event.target.value);
            }}
            value={teamSlug}
          />
          <Button
            type="submit"
            className="ml-2 mt-5"
            onClick={() => {
              mutation.mutate({ teamSlug, lock: true });
              utils.viewer.admin.getSMSLockStateTeamsUsers.invalidate();
            }}>
            Lock Team
          </Button>
        </div>
      </div>
      <UsersTable setSMSLockState={setSMSLockState} />
    </div>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return <LockedSMSView />;
}