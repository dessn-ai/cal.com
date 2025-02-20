import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteBulkUsers } from '../../../../packages/features/users/components/UserTable/BulkActions/DeleteBulkUsers';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    users: {
      type: "string",
      value: JSON.stringify([{ id: 1 }, { id: 2 }, { id: 3 }]),
      label: "Users",
    },
  });

  const users = JSON.parse(state.users.value);

  return (
    <DeleteBulkUsers
      users={users}
      onRemove={() => {
        console.log("Users removed");
      }}
    />
  );
}