import React from 'react';
import { useParentState } from '../useIframeState';
import { trpc } from '@calcom/trpc';

// Mock data for the table
const mockTableData = [
  {
    id: 1,
    host: "John Doe",
    noShows: 5,
    totalBookings: 50,
    noShowRate: "10%"
  },
  {
    id: 2,
    host: "Jane Smith",
    noShows: 3,
    totalBookings: 40,
    noShowRate: "7.5%"
  }
];

// Mock HighestNoShowHostTable component
const MockHighestNoShowHostTable = () => {
  return (
    <div className="rounded-md border">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Host</th>
            <th className="p-3 text-left">No Shows</th>
            <th className="p-3 text-left">Total Bookings</th>
            <th className="p-3 text-left">No Show Rate</th>
          </tr>
        </thead>
        <tbody>
          {mockTableData.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="p-3">{row.host}</td>
              <td className="p-3">{row.noShows}</td>
              <td className="p-3">{row.totalBookings}</td>
              <td className="p-3">{row.noShowRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    startDate: {
      type: "string",
      value: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "End Date",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    isAll: {
      type: "boolean",
      value: false,
      label: "Is All",
    },
  });

  return (
    <div className="p-4">
      <MockHighestNoShowHostTable />
    </div>
  );
}