import React from 'react';
import { useParentState } from '../useIframeState';

const MockAppearanceSettings = () => {
  return (
    <div className="w-full">
      <h1>Appearance Settings</h1>
      <div className="space-y-6">
        <div>
          <h2>Theme</h2>
          <select className="mt-2">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div>
          <h2>Custom Branding</h2>
          <input 
            type="text" 
            placeholder="Brand Name"
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="w-full p-4">
      <MockAppearanceSettings />
    </div>
  );
}