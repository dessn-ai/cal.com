import React from 'react';
import { useParentState } from '../useIframeState';

// Mock ToastProvider implementation
const ToastProvider = ({ children }) => {
  return (
    <div data-testid="toast-provider">
      {children}
      <div id="toast-root" />
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    theme: {
      type: "dropdown",
      value: "light",
      options: ["light", "dark"],
      label: "Theme",
    },
  });

  return (
    <ToastProvider>
      <div style={{ padding: '20px' }}>
        <p>Toast Provider Demo</p>
        <small style={{ color: '#666' }}>
          ToastProvider is configured and ready to show notifications.
          It doesn't render any visible UI by itself.
        </small>
      </div>
    </ToastProvider>
  );
}