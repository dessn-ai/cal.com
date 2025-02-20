import React from 'react';
import { useParentState } from '../useIframeState';

const AppearancePage = () => {
  return (
    <div className="team-appearance-page">
      <div className="settings-header">
        <h1>Team Appearance</h1>
        <p>Customize your team appearance</p>
      </div>
      <div className="appearance-content">
        <div>Team Appearance Settings Content</div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return <AppearancePage />;
}