import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/team/screens/Team';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamName: {
      type: "string",
      value: "Awesome Team",
      label: "Team Name",
    },
    members: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          name: "John Doe",
          bio: "Software Engineer",
          username: "johndoe",
          organizationId: null,
          avatarUrl: "https://example.com/avatar1.jpg",
          profile: {
            id: 1,
            username: "johndoe",
            organizationId: null,
            organization: null,
          },
          safeBio: "Software Engineer",
          bookerUrl: "/book",
        },
        {
          id: 2,
          name: "Jane Smith",
          bio: "Product Manager",
          username: "janesmith",
          organizationId: null,
          avatarUrl: "https://example.com/avatar2.jpg",
          profile: {
            id: 2,
            username: "janesmith",
            organizationId: null,
            organization: null,
          },
          safeBio: "Product Manager",
          bookerUrl: "/book",
        },
      ]),
      label: "Team Members",
    },
  });

  const members = JSON.parse(state.members.value);

  return (
    <ImportedComponent
      teamName={state.teamName.value}
      members={members}
    />
  );
}