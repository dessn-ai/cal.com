import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock the actual component to avoid dependency issues
const MockNoSlotsNotificationSwitch = ({ currentOrg, isAdminOrOwner }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="min-w-48">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            defaultChecked={currentOrg.organizationSettings.adminGetsNoSlotsNotification}
            className="peer h-4 w-7 rounded-full bg-gray-200"
          />
          <span className="peer-checked:bg-brand-default absolute mx-1 h-3 w-3 rounded-full bg-white transition-all content-['']" />
        </label>
      </div>
      <div className="text-default text-sm">
        Notify when there are no meeting slots available
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currentOrg: {
      type: "dropdown",
      value: "organization1",
      options: ["organization1", "organization2", "organization3"],
      label: "Current Organization",
    },
    isAdminOrOwner: {
      type: "boolean",
      value: true,
      label: "Is Admin or Owner",
    },
  });

  const mockCurrentOrg = {
    id: "org1",
    name: state.currentOrg.value,
    slug: state.currentOrg.value.toLowerCase(),
    organizationSettings: {
      adminGetsNoSlotsNotification: true,
    },
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-4">
        <MockNoSlotsNotificationSwitch
          currentOrg={mockCurrentOrg}
          isAdminOrOwner={state.isAdminOrOwner.value}
        />
      </div>
    </Suspense>
  );
}