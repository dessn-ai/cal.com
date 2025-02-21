import React from 'react';
import { useParentState } from '../useIframeState';
import { FeedbackTable } from '../../../../packages/features/insights/components/FeedbackTable';


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
          username: "johndoe",
          rating: 5,
          feedback: "Great service!"
        },
        {
          userId: 2,
          user: {
            name: "Jane Smith",
            avatarUrl: "https://example.com/avatar2.jpg"
          },
          emailMd5: "def456",
          username: "janesmith",
          rating: 4,
          feedback: "Very good experience"
        }
      ]),
      label: "Feedback Data"
    }
  });

  const parsedData = React.useMemo(() => {
    try {
      return JSON.parse(state.data.value);
    } catch (error) {
      console.error("Failed to parse data:", error);
      return undefined;
    }
  }, [state.data.value]);

  return <FeedbackTable data={parsedData} />;
}