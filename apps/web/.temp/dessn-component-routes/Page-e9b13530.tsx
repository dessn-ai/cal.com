import React from 'react';
import { useParentState } from '../useIframeState';

// Create a simple mock component instead of importing
const MockUsersPage = () => {
  return (
    <div>
      <h1>Users Management</h1>
      <div>Users Listing View Mock</div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Mock components and functions
  React.useEffect(() => {
    Object.assign(global, {
      getTranslate: async () => (key: string) => key,
      Button: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
      SettingsHeader: ({ children, title, description }: any) => (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
      ),
      UsersListingView: () => <div>Users Listing View</div>,
    });
  }, []);

  return (
    <div className="preview-container">
      <MockUsersPage />
    </div>
  );
}