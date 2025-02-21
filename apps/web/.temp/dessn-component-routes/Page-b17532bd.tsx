import React from 'react';
import { useParentState } from '../useIframeState';

// Mock the organization profile page component
const MockOrganizationProfilePage = () => {
  return (
    <div className="organization-profile-mock">
      <div className="mock-header">
        <h1>Organization Profile Settings</h1>
      </div>
      <div className="mock-content">
        <div className="mock-form">
          <div className="mock-field">
            <label>Organization Name</label>
            <input type="text" placeholder="Enter organization name" />
          </div>
          <div className="mock-field">
            <label>Organization Slug</label>
            <input type="text" placeholder="Enter organization slug" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="preview-container">
      <MockOrganizationProfilePage />
    </div>
  );
}