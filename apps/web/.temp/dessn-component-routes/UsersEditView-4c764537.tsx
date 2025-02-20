import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/users/pages/users-edit-view';
import { useForm, FormProvider } from 'react-hook-form';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock TRPC Provider
const MockTRPCProvider = ({ children }) => {
  return children;
};

// Initialize i18next
const i18n = i18next.createInstance();
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: {
          save: 'Save',
          cancel: 'Cancel',
          edit: 'Edit',
          delete: 'Delete',
          confirm: 'Confirm',
          submit: 'Submit',
          email: 'Email',
          name: 'Name',
          password: 'Password',
          username: 'Username',
          role: 'Role',
          language: 'Language',
          timezone: 'Timezone',
          "2fa": "Two-factor Authentication",
          "admin": "Admin",
          "user": "User",
          "manage-users": "Manage Users",
          "edit-user": "Edit User",
          "delete-user": "Delete User",
          "user-info": "User Information",
          "user-settings": "User Settings",
          "account-settings": "Account Settings",
          "profile-settings": "Profile Settings",
          "security-settings": "Security Settings"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    defaultNS: 'common',
    ns: ['common'],
    debug: false
  });

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error) => {
      console.error('Caught error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div>Something went wrong. Please try again.</div>;
  }

  return children;
};

// Mock TRPC hooks that might be used in the component
const mockTRPCHooks = {
  useQuery: () => ({
    data: null,
    isLoading: false,
    error: null
  }),
  useMutation: () => ({
    mutate: async () => {},
    isLoading: false,
    error: null
  })
};

// Add mock TRPC to window for component access
window.trpc = {
  useQuery: mockTRPCHooks.useQuery,
  useMutation: mockTRPCHooks.useMutation
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    user: {
      type: "string",
      value: JSON.stringify({
        name: "John Doe",
        metadata: {},
        id: 1,
        role: "USER",
        email: "john@example.com",
        locale: "en",
        theme: "light",
        twoFactorSecret: null,
        emailVerified: new Date().toISOString(),
        identityProviderId: null,
        invitedTo: null,
        allowDynamicBooking: true,
        verified: true,
        username: "johndoe",
        bio: "A sample bio",
        avatarUrl: "https://example.com/avatar.jpg",
        timeZone: "UTC",
        weekStart: "Monday",
        startTime: 9,
        endTime: 17,
        bufferTime: 15,
        hideBranding: false,
        appTheme: null,
        createdDate: new Date().toISOString(),
        trialEndsAt: null,
        lastActiveAt: new Date().toISOString(),
        defaultScheduleId: null,
        completedOnboarding: true,
        timeFormat: 24,
        twoFactorEnabled: false,
        backupCodes: null,
        identityProvider: "CAL",
        brandColor: "#000000",
        darkBrandColor: "#FFFFFF",
        allowSEOIndexing: true,
        receiveMonthlyDigestEmail: true,
        disableImpersonation: false,
        organizationId: null,
        locked: false,
        movedToProfileId: null,
        isPlatformManaged: false,
        smsLockState: "UNLOCKED",
        smsLockReviewedByAdmin: false,
        referralLinkId: null,
        creationSource: null
      }),
      label: "User Data",
    },
  });

  const user = JSON.parse(state.user.value);

  const formMethods = useForm({
    defaultValues: user,
  });

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <MockTRPCProvider>
          <I18nextProvider i18n={i18n}>
            <FormProvider {...formMethods}>
              <div className="w-full">
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ImportedComponent
                    user={user}
                  />
                </React.Suspense>
              </div>
            </FormProvider>
          </I18nextProvider>
        </MockTRPCProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}