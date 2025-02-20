import React from 'react';
import { useParentState } from '../useIframeState';
import { ControlComponent } from '../../../../packages/ui/components/form/select/components';
import { GroupBase } from 'react-select';

export default function ComponentPreview() {
  const [state] = useParentState({
    selectProps: {
      type: "dropdown",
      value: "option1",
      options: ["option1", "option2", "option3"],
      label: "Select Option"
    }
  });

  const mockControlProps = {
    children: null,
    cx: ((...classes: any[]) => classes.filter(Boolean).join(' ')),
    clearValue: () => {},
    getStyles: () => ({}),
    getValue: () => [],
    hasValue: false,
    isMulti: false,
    isRtl: false,
    options: [],
    selectOption: () => {},
    selectProps: state.selectProps,
    setValue: () => {},
    theme: {},
    getClassNames: (state: any) => ({
      ...state,
      className: ''
    }),
    innerProps: {},
    menuIsOpen: false,
    isFocused: false
  };

  return (
    <ControlComponent<any, false, GroupBase<any>>
      {...mockControlProps}
    />
  );
}