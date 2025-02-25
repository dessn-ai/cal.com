import React from 'react';
import { useParentState } from '../useIframeState';
import { AddVariablesDropdown } from '../../../../packages/ui/components/editor/plugins/AddVariablesDropdown';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isTextEditor: {
      type: "boolean",
      value: false,
      label: "Is Text Editor",
    },
    addVariableButtonTop: {
      type: "boolean",
      value: false,
      label: "Add Variable Button Top",
    },
    variables: {
      type: "string",
      value: "name,email,date",
      label: "Variables (comma-separated)",
    },
  });

  const addVariable = (variable: string) => {
    console.log(`Added variable: ${variable}`);
  };

  return (
    <AddVariablesDropdown
      addVariable={addVariable}
      isTextEditor={state.isTextEditor.value}
      variables={state.variables.value.split(',')}
      addVariableButtonTop={state.addVariableButtonTop.value}
    />
  );
}