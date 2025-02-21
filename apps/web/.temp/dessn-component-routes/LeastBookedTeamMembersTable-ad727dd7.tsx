import React from 'react';
import { useParentState } from '../useIframeState';

// Mock component that mimics LeastBookedTeamMembersTable
const MockLeastBookedTeamMembersTable = () => {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Least Booked Team Members</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-500">3 bookings</p>
          </div>
        </div>
        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
          <div>
            <p className="font-medium">Jane Smith</p>
            <p className="text-sm text-gray-500">5 bookings</p>
          </div>
        </div>
        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
          <div>
            <p className="font-medium">Mike Johnson</p>
            <p className="text-sm text-gray-500">7 bookings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to configure for this component
  });

  return <MockLeastBookedTeamMembersTable />;
}