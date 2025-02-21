import React from 'react';
import { useParentState } from '../useIframeState';
import { OptionComponent } from '../../../../packages/features/calendars/DestinationCalendarSelector';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Option Label",
      label: "Label",
    },
    subtitle: {
      type: "string",
      value: "Option Subtitle",
      label: "Subtitle",
    },
    isSelected: {
      type: "boolean",
      value: false,
      label: "Is Selected",
    },
  });

  const mockProps = {
    data: {
      label: state.label.value,
      subtitle: state.subtitle.value,
    },
    isSelected: state.isSelected.value,
  };

  return <OptionComponent {...mockProps} />;
}