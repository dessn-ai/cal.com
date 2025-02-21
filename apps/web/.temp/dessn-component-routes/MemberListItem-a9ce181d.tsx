import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/components/MemberListItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    member: {
      type: "string",
      value: JSON.stringify({
        user: {
          name: "John Doe",
          username: "johndoe",
          email: "john@example.com",
        },
        accepted: true,
        role: "MEMBER",
        bookerUrl: "https://example.com",
      }),
      label: "Member Data",
    },
  });

  const memberData = JSON.parse(state.member.value);

  return (
    <ul className="divide-y divide-gray-200">
      <ImportedComponent
        member={{
          ...memberData,
          user: {
            ...memberData.user,
            avatar: "https://via.placeholder.com/150",
          },
        }}
      />
    </ul>
  );
}