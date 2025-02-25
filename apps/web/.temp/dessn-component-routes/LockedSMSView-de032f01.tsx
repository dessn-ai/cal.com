import React, { useState } from 'react';
import { useParentState } from '../useIframeState';

// Mock the UI components
const TextField = ({ name, placeholder, value, onChange }) => (
  <input
    type="text"
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="border p-2 rounded"
  />
);

const Button = ({ children, onClick, className, type }) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`}
  >
    {children}
  </button>
);

const showToast = (message, type) => {
  console.log(`Toast: ${message} (${type})`);
};

// Mock UsersTable component
const UsersTable = ({ setSMSLockState }) => (
  <div>Mock Users Table</div>
);

// Create the main component directly instead of importing
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
      showToast(`Operation successful`, "success");
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
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
            value={teamSlug}
            onChange={(event) => {
              setTeamSlug(event.target.value);
            }}
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

// Preview component
export default function ComponentPreview() {
  const [state, setState] = useParentState({});
  
  return <LockedSMSView />;
}