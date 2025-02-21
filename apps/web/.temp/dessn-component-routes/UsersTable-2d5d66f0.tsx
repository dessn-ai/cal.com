import React from 'react';
import { useParentState } from '../useIframeState';

// Mock minimal component that demonstrates the setSMSLockState functionality
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    setSMSLockState: {
      type: "string",
      value: "Function to set SMS lock state",
      label: "Set SMS Lock State",
    },
  });

  const setSMSLockState = (param: { userId?: number; teamId?: number; lock: boolean }) => {
    console.log("setSMSLockState called with:", param);
  };

  // Simple mock UI to demonstrate the functionality
  return (
    <div className="p-4">
      <h2 className="text-lg font-medium mb-4">Users Table Preview</h2>
      <div className="space-y-4">
        <div className="border p-4 rounded">
          <h3 className="font-medium">Test User</h3>
          <p>test@example.com</p>
          <div className="mt-2">
            <button
              onClick={() => setSMSLockState({ userId: 1, lock: true })}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Lock SMS
            </button>
            <button
              onClick={() => setSMSLockState({ userId: 1, lock: false })}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Unlock SMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}