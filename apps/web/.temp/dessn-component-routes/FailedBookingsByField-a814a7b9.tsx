import React from 'react';
import { useParentState } from '../useIframeState';
import { FailedBookingsByField } from '../../../../packages/features/insights/components/FailedBookingsByField';

import { trpc } from '@calcom/trpc';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
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

  const mockTrpc = {
    viewer: {
      insights: {
        failedBookingsByField: {
          useQuery: () => ({
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
          }),
        },
      },
    },
  };

  return (
    <trpc.Provider client={mockTrpc as any}>
      <FailedBookingsByField />
    </trpc.Provider>
  );
}