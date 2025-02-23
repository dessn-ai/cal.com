import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components and data
const MockSettingsHeader = ({ children, title, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    {children}
  </div>
);

const MockLicenseRequired = ({ children }) => <>{children}</>;

const MockUsersEditView = ({ user }) => (
  <div>
    <h2>Edit User: {user.username}</h2>
    <p>User ID: {user.id}</p>
  </div>
);

// Mock user data
const mockUser = {
  id: 1,
  username: "test_user",
  email: "test@example.com",
  name: "Test User"
};

// Mock translation function
const t = (key) => key;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "1" }),
      label: "Params",
    },
  });

  const params = JSON.parse(state.params.value);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockSettingsHeader title={t("editing_user")} description={t("admin_users_edit_description")}>
        <MockLicenseRequired>
          <MockUsersEditView user={mockUser} />
        </MockLicenseRequired>
      </MockSettingsHeader>
    </Suspense>
  );
}