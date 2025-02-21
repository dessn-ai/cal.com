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

  // Mock the required styling functions and props
  const commonProps = {
    cx: (styles: string, state: any) => styles,
    getStyles: () => ({}),
    getValue: () => [option],
    hasValue: true,
    isDisabled: false,
    isFocused: false,
    isMulti: false,
    options: [option],
    selectOption: () => {},
    theme: {
      spacing: { baseUnit: 4 },
      colors: {},
      borderRadius: 4,
    },
    getClassNames: (name: string, props: any) => `react-select__${name}`,
    className: '',
    innerProps: {},
    selectProps: {
      classNamePrefix: 'react-select',
    },
  };

  return (
    <SingleValueComponent
      data={option}
      {...commonProps}
    />
  );
}