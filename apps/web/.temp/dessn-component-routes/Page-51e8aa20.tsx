import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock component to prevent actual API key view rendering
const MockApiKeysView = () => {
  return (
    <div className="mock-api-keys-container">
      <h2>API Keys</h2>
      <div>API Keys View Content</div>
      <button className="mock-new-key-button">New API Key</button>
    </div>
  );
};

// Mock the imported component to avoid actual page implementation
const MockImportedComponent = () => {
  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Developer Settings</h1>
      </div>
      <MockApiKeysView />
    </div>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockImportedComponent />
    </Suspense>
  );
}