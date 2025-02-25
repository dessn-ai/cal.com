import React from 'react';
import { useParentState } from '../useIframeState';

// Create a simplified version of SideBar that doesn't use Navigation
const SimplifiedSideBar = ({ bannersHeight, isPlatformUser, user }) => {
  return (
    <div className="flex h-full flex-col" data-testid="sidebar">
      <aside className="desktop-transparent fixed left-0 top-0 h-full max-h-screen w-14 flex-col md:flex lg:w-56 lg:px-2">
        <div className="flex h-full w-full flex-col">
          <div className="text-center">Menu Items Would Go Here</div>
        </div>
      </aside>
    </div>
  );
};

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
    <SimplifiedSideBar 
      bannersHeight={state.bannersHeight.value} 
      isPlatformUser={state.isPlatformUser.value}
      user={mockUser}
    />
  );
}