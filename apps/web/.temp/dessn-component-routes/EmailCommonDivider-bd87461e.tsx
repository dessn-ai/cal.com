import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/emails/src/components/EmailCommonDivider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Divider Content",
      label: "Children",
    },
    mutipleRows: {
      type: "boolean",
      value: false,
      label: "Multiple Rows",
    },
    headStyles: {
      type: "string",
      value: '{"padding": "20px", "color": "#333333"}',
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
      mutipleRows={state.mutipleRows.value}
      headStyles={parsedHeadStyles}
    >
      {state.children.value}
    </ImportedComponent>
  );
}