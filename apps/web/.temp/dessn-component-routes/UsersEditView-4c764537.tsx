import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/users/pages/users-edit-view';

import { UserForm } from '../../../../packages/features/ee/users/components/UserForm';

// Mock the necessary dependencies
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

jest.mock('@calcom/trpc/react', () => ({
  trpc: {
    useUtils: jest.fn(),
    viewer: {
      users: {
        update: {
          useMutation: jest.fn(),
        },
      },
    },
  },
}));

jest.mock('@calcom/ui', () => ({
  showToast: jest.fn(),
}));

export default function ComponentPreview() {
  const [state] = useParentState({
    user: {
      type: 'object',
      value: {
        id: 1,
        username: 'johndoe',
        email: 'john@example.com',
        name: 'John Doe',
        // Add other necessary user properties here
      },
      label: 'User',
    },
  });

  return (
    <ImportedComponent.UsersEditView user={state.user.value} />
  );
}