import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/my-account/profile-view';
import { useForm } from 'react-hook-form';

// Mock the missing dependencies
const mockTrpc = {
  useUtils: () => ({}),
  viewer: {
    me: {
      useQuery: () => ({
        data: {
          id: "123",
          email: "john@example.com",
          username: "johndoe",
          name: "John Doe",
          avatarUrl: "https://example.com/avatar.jpg",
          bio: "I'm a software developer",
          emailVerified: new Date(),
          identityProvider: "CAL",
          identityProviderEmail: "john@example.com",
          organization: null,
          twoFactorEnabled: false,
          secondaryEmails: [],
          passwordAdded: true
        },
        isPending: false
      }),
    },
    updateProfile: {
      useMutation: () => ({
        mutate: () => {},
        isPending: false
      }),
    },
    unlinkConnectedAccount: {
      useMutation: () => ({
        mutate: () => {},
      }),
    },
    addSecondaryEmail: {
      useMutation: () => ({
        mutate: () => {},
      }),
    },
    auth: {
      resendVerifyEmail: {
        useMutation: () => ({
          mutate: () => {},
        }),
      },
      verifyPassword: {
        useMutation: () => ({
          mutate: () => {},
        }),
      }
    },
    deleteMe: {
      useMutation: () => ({
        mutate: () => {},
      }),
    },
    deleteMeWithoutPassword: {
      useMutation: () => ({
        mutate: () => {},
      }),
    },
    attributes: {
      getByUserId: {
        useQuery: () => ({
          data: [],
          isPending: false
        }),
      },
    },
  },
};

// Mock next-auth session
const mockSession = {
  update: () => Promise.resolve(),
  data: {
    user: {
      id: "123",
      email: "john@example.com",
      name: "John Doe"
    }
  }
};

// Create a context provider component
const MockProviders = ({ children }) => {
  return children;
};

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

  return (
    <MockProviders>
      <ImportedComponent
        user={{
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
          passwordAdded: true
        }}
        isPending={false}
        update={() => {}}
        t={(key) => key}
        trpc={mockTrpc}
        useForm={useForm}
        session={mockSession}
      />
    </MockProviders>
  );
}