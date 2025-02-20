/** @jsxRuntime classic */
/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';
import { useParentState } from '../useIframeState';

// Create a mock locale hook
const useLocale = () => ({
  t: (key: string) => key,
});

// Constants
const WEBAPP_URL = 'http://localhost:3000';

// Mock UI components
const TextField = React.forwardRef((props: any, ref) => (
  <input 
    ref={ref} 
    {...props} 
    className={props.containerClassName}
    placeholder={props.hint}
  />
));

const Button = (props: any) => (
  <button type={props.type} onClick={props.onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
    {props.children}
  </button>
);

export default function ComponentPreview() {
  const [state] = useParentState({
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
  });

  // Mock next-auth/react signIn function
  const mockSignIn = async (provider: string, options: any) => {
    console.log(`Mocked signIn called with provider: ${provider} and options:`, options);
    return { ok: true, error: null };
  };

  // Mock next/navigation useSearchParams hook
  const mockUseSearchParams = () => ({
    get: (param: string) => state.username.value,
  });

  // Mock form component
  const MockImpersonationForm = () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      mockSignIn("impersonation-auth", {
        username: state.username.value,
        callbackUrl: `${WEBAPP_URL}/event-types`,
      });
    };

    return (
      <form className="mb-6 w-full" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2">
          <TextField
            containerClassName="w-full"
            name="user_impersonation_heading"
            hint="Enter username to impersonate"
            defaultValue={state.username.value}
            data-testid="admin-impersonation-input"
          />
          <Button type="submit" data-testid="impersonation-submit">
            Impersonate
          </Button>
        </div>
      </form>
    );
  };

  try {
    return (
      <div className="p-4">
        <MockImpersonationForm />
      </div>
    );
  } catch (error) {
    console.error('Error rendering ImpersonationView:', error);
    return (
      <div className="p-4">
        <h2 className="text-red-600">Error loading component</h2>
        <pre className="mt-2 text-sm">{error instanceof Error ? error.message : 'Unknown error'}</pre>
      </div>
    );
  }
}