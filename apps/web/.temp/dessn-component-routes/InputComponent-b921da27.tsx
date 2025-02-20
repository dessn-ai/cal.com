import React from 'react';
import { useParentState } from '../useIframeState';
import ReactSelect from 'react-select';
import { InputComponent } from '../../../../packages/ui/components/form/select/components';

// Mock the required theme and styles
const selectTheme = {
  spacing: {
    baseUnit: 4,
    controlHeight: 38,
    menuGutter: 8
  },
  colors: {
    primary: '#000',
    primary75: '#2684FF',
    primary50: '#B2D4FF',
    primary25: '#DEEBFF',
    danger: '#DE350B',
    dangerLight: '#FFBDAD',
    neutral0: 'white',
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
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    inputClassName: {
      type: "string",
      value: "custom-input-class",
      label: "Input Class Name",
    },
  });

  // Create a complete mock props object that matches what react-select expects
  const inputProps = {
    inputClassName: state.inputClassName.value,
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    value: "",
    cx: (...args: any[]) => args.filter(Boolean).join(' '),
    theme: selectTheme,
    selectProps: {
      classNamePrefix: "react-select",
      components: {
        Input: InputComponent
      },
      styles: {},
      theme: selectTheme
    },
    isDisabled: false,
    isHidden: false,
    "aria-label": "input"
  };

  return (
    <div className="react-select-container">
      <ReactSelect
        components={{
          Input: (props) => <InputComponent {...props} inputClassName={state.inputClassName.value} />
        }}
        onChange={() => {}}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' }
        ]}
        classNamePrefix="react-select"
        theme={selectTheme}
      />
    </div>
  );
}