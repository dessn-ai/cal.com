import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/my-account/profile-view';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
    avatarUrl: {
      type: "string",
      value: "https://example.com/avatar.jpg",
      label: "Avatar URL",
    },
    name: {
      type: "string",
      value: "John Doe",
      label: "Name",
    },
    email: {
      type: "string",
      value: "john@example.com",
      label: "Email",
    },
    bio: {
      type: "string",
      value: "I'm a software developer",
      label: "Bio",
    },
  });

  const mockUser = {
    id: "123",
    email: state.email.value,
    username: state.username.value,
    name: state.name.value,
    avatarUrl: state.avatarUrl.value,
    bio: state.bio.value,
    emailVerified: new Date(),
    identityProvider: "CAL",
    identityProviderEmail: state.email.value,
    organization: null,
    twoFactorEnabled: false,
    secondaryEmails: [],
  };

  return (
    <ImportedComponent
      user={mockUser}
      isPending={false}
      update={() => {}}
      t={(key) => key}
      trpc={{
        useUtils: () => ({}),
        viewer: {
          me: {
            useQuery: () => ({ data: mockUser, isPending: false }),
          },
          updateProfile: {
            useMutation: () => ({ mutate: () => {} }),
          },
          unlinkConnectedAccount: {
            useMutation: () => ({ mutate: () => {} }),
          },
          addSecondaryEmail: {
            useMutation: () => ({ mutate: () => {} }),
          },
          auth: {
            resendVerifyEmail: {
              useMutation: () => ({ mutate: () => {} }),
            },
          },
          deleteMe: {
            useMutation: () => ({ mutate: () => {} }),
          },
          deleteMeWithoutPassword: {
            useMutation: () => ({ mutate: () => {} }),
          },
          attributes: {
            getByUserId: {
              useQuery: () => ({ data: [], isPending: false }),
            },
          },
        },
      }}
      useForm={useForm}
    />
  );
}