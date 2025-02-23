import React, { useRef, useEffect } from 'react';
import { useParentState } from '../useIframeState';

// Mock component that mimics the original but without external dependencies
const ImpersonationViewMock = ({ signIn, useSearchParams, useRouter }) => {
  const usernameRef = useRef(null);
  const searchParams = useSearchParams();
  
  const username = searchParams?.get("username")?.toLowerCase();

  // Mock translations
  const t = (key) => ({
    'user_impersonation_heading': 'User Impersonation',
    'impersonate_user_tip': 'Enter username to impersonate',
    'impersonate': 'Impersonate'
  })[key] || key;

  useEffect(() => {
    if (username) {
      const enteredUsername = username.toLowerCase();
      signIn("impersonation-auth", {
        username: enteredUsername,
        callbackUrl: `/event-types`,
      });
    }
  }, [username, signIn]);

  return (
    <form
      className="mb-6 w-full"
      onSubmit={(e) => {
        e.preventDefault();
        const enteredUsername = usernameRef.current?.value.toLowerCase();
        signIn("impersonation-auth", {
          username: enteredUsername,
          callbackUrl: `/event-types`,
        });
      }}>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <div className="w-full">
          <div className="flex">
            <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-gray-500 sm:text-sm">
              http://localhost/
            </span>
            <input
              ref={usernameRef}
              className="block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name={t("user_impersonation_heading")}
              defaultValue={username || ""}
              data-testid="admin-impersonation-input"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">{t("impersonate_user_tip")}</p>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
    return Promise.resolve({ error: null, status: 200, ok: true, url: null });
  };

  // Mock next/navigation useSearchParams hook
  const mockUseSearchParams = () => ({
    get: (param: string) => state.username.value,
  });

  // Mock router
  const mockRouter = {
    push: (path: string) => Promise.resolve(true),
    replace: (path: string) => Promise.resolve(true),
    query: {},
    asPath: '/',
    pathname: '/',
  };

  return (
    <div className="mx-auto max-w-full p-6">
      <ImpersonationViewMock
        signIn={mockSignIn}
        useSearchParams={mockUseSearchParams}
        useRouter={() => mockRouter}
      />
    </div>
  );
}