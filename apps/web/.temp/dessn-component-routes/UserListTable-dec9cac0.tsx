import React from 'react';
import { useParentState } from '../useIframeState';

// Mock data for the table
const MOCK_USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'Pending',
  },
];

// Mock UserListTable component with minimal dependencies
const MockUserListTable = ({
  className,
  payouts,
  isLoading,
  props
}) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <div className="bg-white rounded-md shadow">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {MOCK_USERS.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isLoading && (
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    payouts: {
      type: "string",
      value: "{}",
      label: "Payouts",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    props: {
      type: "string",
      value: "{}",
      label: "Table Props",
    },
  });

  return (
    <MockUserListTable
      className={state.className.value}
      payouts={JSON.parse(state.payouts.value)}
      isLoading={state.isLoading.value}
      props={JSON.parse(state.props.value)}
    />
  );
}