import React from 'react';
import { useParentState } from '../useIframeState';
import { ControlComponent } from '../../../../packages/ui/components/form/select/components';
import { GroupBase } from 'react-select';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selectProps: {
      type: "dropdown",
      value: "option1",
      options: ["option1", "option2", "option3"],
      label: "Select Option"
    }
  });

  const mockControlProps = {
    children: null,
    cx: (...args: any[]) => args.filter(Boolean).join(' '),
    clearValue: () => {},
    getStyles: () => ({}),
    getValue: () => [],
    hasValue: false,
    isMulti: false,
    isRtl: false,
    options: [],
    selectOption: () => {},
    setValue: () => {},
    theme: {
      spacing: {},
      borderRadius: 4,
      colors: {},
      spacing: {
        baseUnit: 4,
        controlHeight: 38,
        menuGutter: 8
      }
    },
    innerRef: null,
    innerProps: {},
    isDisabled: false,
    isFocused: false,
    menuIsOpen: false,
    getClassNames: (state: any) => '',
    selectProps: state.selectProps
  };

  return (
    <ControlComponent<any, false, GroupBase<any>>
      {...mockControlProps}
    />
  );
}