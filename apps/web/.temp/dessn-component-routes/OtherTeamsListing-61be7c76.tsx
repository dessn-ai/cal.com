import React from 'react';
import { useParentState } from '../useIframeState';
import { OtherTeamsListing } from '../../../../packages/features/ee/organizations/pages/components/OtherTeamsListing';
import { trpc } from '@calcom/trpc/react';

// Mock UI components
const Dialog = ({ children, open, onOpenChange }: any) => {
  return open ? (
    <div role="dialog">
      {children}
    </div>
  ) : null;
};

Dialog.Title = ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>;
Dialog.Description = ({ children }: { children: React.ReactNode }) => <p>{children}</p>;
Dialog.Content = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

// Mock other potentially needed UI components
const Button = ({ children, ...props }: any) => <button {...props}>{children}</button>;
const Alert = ({ children, severity, ...props }: any) => (
  <div role="alert" {...props}>
    {children}
  </div>
);

// Create a mock I18nProvider component
const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock the useLocale hook
const useLocale = () => ({
  t: (key: string) => key,
  i18n: {
    language: 'en',
    defaultLocale: 'en',
  },
});

// Mock UI components globally
(global as any).Dialog = Dialog;
(global as any).Button = Button;
(global as any).Alert = Alert;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    hasError: {
      type: "boolean",
      value: false,
      label: "Has Error",
    },
    teamsCount: {
      type: "number",
      value: 0,
      label: "Number of Teams",
    },
  });

  // Create mock data
  const mockData = Array.from({ length: state.teamsCount.value }, (_, index) => ({
    id: index + 1,
    name: `Team ${index + 1}`,
    slug: `team-${index + 1}`,
    membership: {
      accepted: true,
      role: 'MEMBER',
    },
  }));

  // Mock the trpc hook
  const mockQuery = {
    data: mockData,
    isPending: state.isPending.value,
    error: state.hasError.value ? new Error("Mock error") : null,
  };

  // Override the trpc object
  (trpc as any).viewer = {
    organizations: {
      listOtherTeams: {
        useQuery: () => mockQuery,
      },
    },
  };

  // Override the useLocale hook globally
  (global as any).useLocale = useLocale;

  // Mock @calcom/ui components
  (global as any).CalComUI = {
    Dialog,
    Button,
    Alert,
  };

  return (
    <I18nProvider>
      <OtherTeamsListing />
    </I18nProvider>
  );
}