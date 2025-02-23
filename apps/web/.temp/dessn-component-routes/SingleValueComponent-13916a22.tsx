import React from 'react';
import { useParentState } from '../useIframeState';
import Select from 'react-select';
import { SingleValueComponent } from '../../../../packages/features/calendars/DestinationCalendarSelector';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    option: {
      type: "dropdown",
      value: "option1",
      options: ["option1", "option2", "option3"],
      label: "Option",
    },
    label: {
      type: "string",
      value: "Example Label",
      label: "Label",
    },
    subtitle: {
      type: "string",
      value: "Example Subtitle",
      label: "Subtitle",
    },
  });

  const option = {
    label: state.label.value,
    value: state.option.value,
    subtitle: state.subtitle.value,
  };

  return (
    <Select
      value={option}
      options={[option]}
      components={{
        SingleValue: SingleValueComponent
      }}
      isDisabled={false}
      className="react-select"
      classNamePrefix="select"
      onChange={() => {}}
    />
  );
}