import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/emails/src/components/EmailScheduledBodyHeaderContent';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Your Appointment is Scheduled",
      label: "Title",
    },
    subtitle: {
      type: "string",
      value: "We look forward to meeting with you",
      label: "Subtitle",
    },
    headStyles: {
      type: "string",
      value: '{"padding": "20px", "backgroundColor": "#f3f4f6"}',
      label: "Head Styles (JSON)",
    },
  });

  const parsedHeadStyles = React.useMemo(() => {
    try {
      return JSON.parse(state.headStyles.value);
    } catch (error) {
      console.error("Invalid JSON for headStyles");
      return {};
    }
  }, [state.headStyles.value]);

  return (
    <ImportedComponent
      title={state.title.value}
      subtitle={state.subtitle.value}
      headStyles={parsedHeadStyles}
    />
  );
}