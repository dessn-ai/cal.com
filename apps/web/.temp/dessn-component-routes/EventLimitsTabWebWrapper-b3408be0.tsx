import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventLimitsTabWebWrapper';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "string",
      value: "default",
      label: "Event Type",
    },
    customClassNames: {
      type: "string",
      value: "{}",
      label: "Custom Class Names",
    },
  });

  const parsedCustomClassNames = React.useMemo(() => {
    try {
      return JSON.parse(state.customClassNames.value);
    } catch (error) {
      console.error("Invalid JSON for customClassNames");
      return {};
    }
  }, [state.customClassNames.value]);

  return (
    <ImportedComponent
      eventType={state.eventType.value}
      customClassNames={parsedCustomClassNames}
    />
  );
}