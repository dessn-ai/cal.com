import React from 'react';

const DummyComponent = () => {
  return (
    <div className="mock-settings-page">
      <h1>My Account Settings</h1>
      <div className="mock-settings-content">
        <p>General Settings Content</p>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  return (
    <div className="preview-container">
      <DummyComponent />
    </div>
  );
}