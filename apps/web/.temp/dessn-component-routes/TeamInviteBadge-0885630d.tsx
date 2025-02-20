import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamInviteBadge } from '../../../../packages/features/shell/TeamInviteBadge';

// Create mock data and context
const MockTeamInvitesContext = React.createContext({
  isPending: false,
  listInvites: ['invite1', 'invite2']
});

const MockLocaleContext = React.createContext({
  t: (key: string) => key
});

// Create mock providers
const MockTeamInvitesProvider = ({ children }) => (
  <MockTeamInvitesContext.Provider 
    value={{
      isPending: false,
      listInvites: ['invite1', 'invite2']
    }}
  >
    {children}
  </MockTeamInvitesContext.Provider>
);

const MockLocaleProvider = ({ children }) => (
  <MockLocaleContext.Provider 
    value={{
      t: (key: string) => key
    }}
  >
    {children}
  </MockLocaleContext.Provider>
);

// Mock Badge component
const MockBadge = ({ children }) => <div>{children}</div>;

// Override the hooks to use our mock contexts
const useTeamInvites = () => React.useContext(MockTeamInvitesContext);
const useLocale = () => React.useContext(MockLocaleContext);

// Make the hooks available in the same scope as TeamInviteBadge
TeamInviteBadge.useTeamInvites = useTeamInvites;
TeamInviteBadge.useLocale = useLocale;
TeamInviteBadge.Badge = MockBadge;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to control for this component
  });

  return (
    <MockTeamInvitesProvider>
      <MockLocaleProvider>
        <TeamInviteBadge />
      </MockLocaleProvider>
    </MockTeamInvitesProvider>
  );
}