import React from 'react';
import { useParentState } from '../useIframeState';

// Mock data
const MOCK_DATA = [
  { name: 'John Doe', bookings: 50 },
  { name: 'Jane Smith', bookings: 45 },
  { name: 'Bob Johnson', bookings: 40 },
];

// Mock component that doesn't rely on the context
const MockMostBookedTeamMembersTable = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <div className="p-6">
        <h3 className="font-medium leading-6 text-gray-900">Most Booked Team Members</h3>
        <div className="mt-6">
          <table className="w-full">
            <thead>
              <tr className="border-b text-sm text-gray-500">
                <th className="pb-2 text-left font-normal">Name</th>
                <th className="pb-2 text-right font-normal">Bookings</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DATA.map((member, index) => (
                <tr key={index} className="border-b text-sm">
                  <td className="py-4">{member.name}</td>
                  <td className="py-4 text-right">{member.bookings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to control for this component
  });

  return <MockMostBookedTeamMembersTable />;
}