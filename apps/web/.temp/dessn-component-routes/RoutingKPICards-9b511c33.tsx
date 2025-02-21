import React from 'react';
import { useParentState } from '../useIframeState';

// Mock RoutingKPICards component
const MockRoutingKPICards: React.FC = () => {
  return (
    <div className="mock-routing-kpi-cards">
      <h2>Routing KPI Cards</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="card p-4 border rounded">
          <h3>Total Submissions</h3>
          <p>150</p>
        </div>
        <div className="card p-4 border rounded">
          <h3>Successful Bookings</h3>
          <p>75</p>
        </div>
        <div className="card p-4 border rounded">
          <h3>Conversion Rate</h3>
          <p>50%</p>
        </div>
      </div>
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
      value: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "End Date",
    },
    userId: {
      type: "number",
      value: 1,
      label: "User ID",
    },
    isAll: {
      type: "boolean",
      value: true,
      label: "Is All",
    },
    routingFormId: {
      type: "number",
      value: 1,
      label: "Routing Form ID",
    },
  });

  return (
    <div className="p-4">
      <MockRoutingKPICards />
    </div>
  );
}