import React from 'react';
import { useParentState } from '../useIframeState';
import ReactSelect from 'react-select';
import { InputComponent } from '../../../../packages/ui/components/form/select/components';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    inputClassName: {
      type: "string",
      value: "custom-input-class",
      label: "Input Class Name",
    },
  });

  return (
    <ReactSelect
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
      classNames={{
        input: () => "text-emphasis",
        control: () => "border border-default bg-default text-emphasis px-3 py-2 rounded-md",
      }}
    />
  );
}