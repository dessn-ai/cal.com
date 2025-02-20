import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock the team appearance page component
const MockTeamAppearancePage = () => {
  return (
    <div className="team-appearance-page">
      <MockSettingsHeader 
        title="Appearance"
        description="Customize the appearance of your team booking pages">
        <div className="appearance-settings">
          <h2>Theme Settings</h2>
          <div className="mock-form">
            <div className="form-group">
              <label>Theme</label>
              <select>
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
            <div className="form-group">
              <label>Brand Color</label>
              <input type="color" defaultValue="#292929" />
            </div>
          </div>
        </div>
      </MockSettingsHeader>
    </div>
  );
};

// Mock components
const MockSettingsHeader = ({ children, title, description }) => {
  return (
    <div className="settings-header">
      <div className="header-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="header-body">
        {children}
      </div>
    </div>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Default state if needed
    theme: 'light',
    brandColor: '#292929'
  });

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <MockTeamAppearancePage />
      </Suspense>
    </ErrorBoundary>
  );
}