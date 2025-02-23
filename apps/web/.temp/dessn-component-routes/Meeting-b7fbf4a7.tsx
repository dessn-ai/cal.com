import React from 'react';
import { useParentState } from '../useIframeState';
import { Meeting } from '../../../../packages/lib/OgImages';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Team Meeting",
      label: "Title",
    },
    profileName: {
      type: "string",
      value: "John Doe",
      label: "Profile Name",
    },
    profileImage: {
      type: "string",
      value: "https://example.com/avatar.png",
      label: "Profile Image URL",
    },
    usersCount: {
      type: "number",
      value: 2,
      label: "Number of Additional Users",
    },
  });

  const profile = {
    name: state.profileName.value,
    image: state.profileImage.value,
  };

  const users = Array.from({ length: state.usersCount.value }, (_, index) => ({
    name: `User ${index + 1}`,
    username: `user${index + 1}`,
  }));

  return (
    <Meeting
      title={state.title.value}
      profile={profile}
      users={users}
    />
  );
}