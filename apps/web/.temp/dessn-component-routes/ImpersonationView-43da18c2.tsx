import React, { useRef } from 'react';
import { useParentState } from '../useIframeState';

// Create a simplified version of the component for preview
const PreviewComponent = ({ signIn, useSearchParams }) => {
  const usernameRef = useRef(null);
  const searchParams = useSearchParams();

  // Mock translations
  const t = (key) => key;

  return (
    <form
      className="mb-6 w-full"
      onSubmit={(e) => {
        e.preventDefault();
        const enteredUsername = usernameRef.current?.value?.toLowerCase();
        signIn("impersonation-auth", {
          username: enteredUsername,
          callbackUrl: `/event-types`,
        });
      }}>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <div className="w-full">
          <input
            ref={usernameRef}
            className="w-full rounded-md border border-gray-300 px-4 py-2"
            placeholder="Enter username"
            data-testid="admin-impersonation-input"
          />
          <div className="mt-1 text-sm text-gray-500">{t("impersonate_user_tip")}</div>
        </div>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
          data-testid="impersonation-submit">
          {t("impersonate")}
        </button>
      </div>
    </form>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
  });

  // Mock next-auth/react signIn function
  const mockSignIn = (provider: string, options: any) => {
    console.log(`Mocked signIn called with provider: ${provider} and options:`, options);
    return Promise.resolve({ ok: true });
  };

  // Mock next/navigation useSearchParams hook
  const mockUseSearchParams = () => {
    return {
      get: (param: string) => state.username.value,
    };
  };

  try {
    return (
      <div className="w-full p-4">
        <PreviewComponent
          signIn={mockSignIn}
          useSearchParams={mockUseSearchParams}
        />
      </div>
    );
  } catch (error) {
    console.error('Error rendering ImpersonationView:', error);
    return <div>Error loading component</div>;
  }
}