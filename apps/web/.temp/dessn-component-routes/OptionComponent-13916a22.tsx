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

  // Mock the minimum required props
  const mockProps = {
    data: {
      label: state.label.value,
      subtitle: state.subtitle.value,
    },
    isSelected: state.isSelected.value,
    isFocused: false,
    isDisabled: false,
    // Mock the required select context props
    cx: (...classNames) => classNames.filter(Boolean).join(' '),
    getClassNames: (name, props) => `react-select__${name}`,
    getValue: () => [],
    theme: {
      spacing: { baseUnit: 4, controlHeight: 38 },
      colors: {
        primary: '#2684FF',
        primary75: '#4C9AFF',
        primary50: '#B2D4FF',
        primary25: '#DEEBFF',
        danger: '#DE350B',
        neutral0: '#FFFFFF',
        neutral5: '#F2F2F2',
        neutral10: '#E6E6E6',
        neutral20: '#CCCCCC',
        neutral30: '#B3B3B3',
        neutral40: '#999999',
        neutral50: '#808080',
        neutral60: '#666666',
        neutral70: '#4D4D4D',
        neutral80: '#333333',
        neutral90: '#1A1A1A'
      },
      borderRadius: 4
    },
    getStyles: (name, props) => ({}),
    options: [],
    selectOption: () => {},
    selectProps: {
      classNamePrefix: 'react-select'
    },
    innerProps: {
      'aria-selected': state.isSelected.value
    }
  };

  return (
    <div className="p-2">
      <OptionComponent {...mockProps} />
    </div>
  );
}