import React from 'react';
import { useParentState } from '../useIframeState';
import { TotalBookingUsersTable } from '../../../../packages/features/insights/components/TotalBookingUsersTable';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    data: {
      type: "string",
      value: JSON.stringify([
        {
          userId: 1,
          user: {
            name: "John Doe",
            avatarUrl: "https://example.com/avatar1.jpg"
          },
          emailMd5: "abc123",
          count: 5,
          username: "johndoe"
        },
        {
          userId: 2,
          user: {
            name: "Jane Smith",
            avatarUrl: "https://example.com/avatar2.jpg"
          },
          emailMd5: "def456",
          count: 3,
          username: "janesmith"
        }
      ]),
      label: "Table Data"
    }
  });

  const parsedData = React.useMemo(() => {
    try {
      return JSON.parse(state.data.value);
    } catch (error) {
      console.error("Failed to parse data:", error);
      return [];
    }
  }, [state.data.value]);

  return <TotalBookingUsersTable data={parsedData} />;
}