import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/emails/src/components/EmailSchedulingBodyHeader';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    headerType: {
      type: "dropdown",
      value: "checkCircle",
      options: ["checkCircle", "xCircle", "calendarCircle", "teamCircle"],
      label: "Header Type",
    },
    headStyles: {
      type: "string",
      value: '{"padding": "40px 40px 0 40px", "backgroundColor": "#f9f9f9"}',
      label: "Head Styles (JSON)",
    },
  });

  const headStyles = React.useMemo(() => {
    try {
      return JSON.parse(state.headStyles.value);
    } catch (e) {
      return undefined;
    }
  }, [state.headStyles.value]);

  return (
    <ImportedComponent
      headerType={state.headerType.value as "checkCircle" | "xCircle" | "calendarCircle" | "teamCircle"}
      headStyles={headStyles}
    />
  );
}