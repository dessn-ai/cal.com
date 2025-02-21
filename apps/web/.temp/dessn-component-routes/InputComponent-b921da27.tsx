import React from 'react';
import { useParentState } from '../useIframeState';
import { InputComponent } from '../../../../packages/ui/components/form/select/components';
import Select from 'react-select';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    inputClassName: {
      type: "string",
      value: "custom-input-class",
      label: "Input Class Name",
    },
  });

  // Wrap the InputComponent in a Select component to provide the necessary context
  return (
    <Select
      components={{
        Input: (props) => (
          <InputComponent
            {...props}
            inputClassName={state.inputClassName.value}
            onBlur={() => {}}
            onChange={() => {}}
            onFocus={() => {}}
            value=""
          />
        )
      }}
      onChange={() => {}}
      options={[]}
    />
  );
}