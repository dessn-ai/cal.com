import React from 'react';
import { useParentState } from '../useIframeState';
import { OptionComponent } from '../../../../packages/features/calendars/DestinationCalendarSelector';
import Select, { components } from 'react-select';

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

  // Create a mock options array for Select
  const options = [
    {
      value: 'option',
      label: state.label.value,
      subtitle: state.subtitle.value,
    }
  ];

  return (
    <Select
      options={options}
      value={options[0]}
      components={{
        Option: (props) => (
          <OptionComponent
            data={{
              label: props.data.label,
              subtitle: props.data.subtitle,
            }}
            isSelected={props.isSelected}
          />
        )
      }}
    />
  );
}