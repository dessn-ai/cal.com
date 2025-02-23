import React from 'react';
import { useParentState } from '../useIframeState';

// Mock data hook to replace trpc
const useFailedBookingsData = () => {
  return {
    data: {
      "Form 1": {
        field1: [
          { optionId: "1", count: 5, optionLabel: "Option 1" },
          { optionId: "2", count: 3, optionLabel: "Option 2" },
        ],
        field2: [
          { optionId: "3", count: 2, optionLabel: "Option 3" },
          { optionId: "4", count: 4, optionLabel: "Option 4" },
        ],
      },
      "Form 2": {
        field3: [
          { optionId: "5", count: 1, optionLabel: "Option 5" },
          { optionId: "6", count: 6, optionLabel: "Option 6" },
        ],
      },
    },
    isLoading: false,
    isError: false
  };
};

export default function ComponentPreview() {
  const [state] = useParentState({
    userId: {
      type: "string",
      value: "user123",
      label: "User ID",
    },
    teamId: {
      type: "string",
      value: "team456",
      label: "Team ID",
    },
    isAll: {
      type: "boolean",
      value: true,
      label: "Is All",
    },
    routingFormId: {
      type: "string",
      value: "form789",
      label: "Routing Form ID",
    },
  });

  const { data, isLoading, isError } = useFailedBookingsData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Failed Bookings by Field</h2>
      {Object.entries(data).map(([formName, fields]) => (
        <div key={formName} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{formName}</h3>
          {Object.entries(fields).map(([fieldName, options]: [string, any]) => (
            <div key={fieldName} className="mb-4">
              <h4 className="font-medium mb-2">{fieldName}</h4>
              <ul className="pl-4">
                {options.map((option: any) => (
                  <li key={option.optionId} className="mb-1">
                    {option.optionLabel}: {option.count} failed bookings
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}