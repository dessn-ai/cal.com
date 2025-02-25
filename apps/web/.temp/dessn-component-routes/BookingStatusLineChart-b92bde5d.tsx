import React from 'react';
import { useParentState } from '../useIframeState';
import { Card, Title, LineChart } from "@tremor/react";

// Mock data for the chart
const mockData = [
  {
    date: "Jan 2024",
    "Created": 10,
    "Completed": 8,
    "Rescheduled": 2,
    "Cancelled": 1,
    "No-Show (Host)": 0,
    "No-Show (Guest)": 1
  },
  {
    date: "Feb 2024",
    "Created": 15,
    "Completed": 12,
    "Rescheduled": 3,
    "Cancelled": 2,
    "No-Show (Host)": 1,
    "No-Show (Guest)": 0
  },
  {
    date: "Mar 2024",
    "Created": 20,
    "Completed": 16,
    "Rescheduled": 4,
    "Cancelled": 2,
    "No-Show (Host)": 0,
    "No-Show (Guest)": 2
  }
];

const dataFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString();
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="h-96 p-4">
      <Card>
        <Title>Event Trends</Title>
        <LineChart
          className="mt-6"
          data={mockData}
          index="date"
          categories={[
            "Created",
            "Completed",
            "Rescheduled",
            "Cancelled",
            "No-Show (Host)",
            "No-Show (Guest)"
          ]}
          colors={["purple", "green", "blue", "red", "slate", "orange"]}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
        />
      </Card>
    </div>
  );
}