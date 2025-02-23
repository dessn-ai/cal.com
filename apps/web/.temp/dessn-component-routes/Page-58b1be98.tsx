import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock components and utilities
const mockTranslations = {
  team_members: 'Team Members',
  members_team_description: 'Manage your team members'
};

const getTranslate = () => mockTranslations;

const MockSettingsHeader = ({ children, title, description, CTA }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    {CTA}
    {children}
  </div>
);

const MockLegacyPage = () => <div>LegacyPage</div>;
const MockTeamMembersCTA = () => <div>TeamMembersCTA</div>;

// Mock the imports directly
const mockModules = {
  'app/_utils': {
    getTranslate
  },
  '@calcom/features/ee/organizations/pages/settings/other-team-members-view': {
    default: MockLegacyPage,
    TeamMembersCTA: MockTeamMembersCTA
  },
  '@calcom/features/settings/appDir/SettingsHeader': {
    default: MockSettingsHeader
  }
};

// Simple component that uses the mocked modules
const ImportedComponent = () => {
  const SettingsHeader = mockModules['@calcom/features/settings/appDir/SettingsHeader'].default;
  const LegacyPage = mockModules['@calcom/features/ee/organizations/pages/settings/other-team-members-view'].default;
  const { TeamMembersCTA } = mockModules['@calcom/features/ee/organizations/pages/settings/other-team-members-view'];
  
  return (
    <div>
      <SettingsHeader 
        title={mockTranslations.team_members}
        description={mockTranslations.members_team_description}
        CTA={<TeamMembersCTA />}
      >
        <LegacyPage />
      </SettingsHeader>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Default state if needed
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}