import React from 'react';
import { useParentState } from '../useIframeState';
import { SideBar } from '../../../../packages/features/shell/SideBar';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    bannersHeight: {
      type: "number",
      value: 0,
      label: "Banners Height",
    },
    isPlatformUser: {
      type: "boolean",
      value: false,
      label: "Is Platform User",
    },
  });

  const mockUser = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    username: 'johndoe',
    avatarUrl: 'https://example.com/avatar.jpg',
    role: 'USER',
  };

  return (
    <SideBar 
      bannersHeight={state.bannersHeight.value} 
      isPlatformUser={state.isPlatformUser.value}
      user={mockUser}
    />
  );
}