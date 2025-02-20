import React from 'react';
import { useParentState } from '../useIframeState';
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
    <SingleValueComponent
      data={option}
      selectProps={{}}
      cx={() => ({})}
      getStyles={() => ({})}
      getValue={() => []}
      hasValue={true}
      isDisabled={false}
      isFocused={false}
      isMulti={false}
      options={[]}
      selectOption={() => {}}
      theme={{}}
    />
  );
}