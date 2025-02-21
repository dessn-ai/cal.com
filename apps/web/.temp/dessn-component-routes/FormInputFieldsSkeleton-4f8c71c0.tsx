import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/components/FormInputFields';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    numberOfFields: {
      type: "number",
      value: 5,
      label: "Number of Fields",
    },
  });

  return (
    <ImportedComponent numberOfFields={state.numberOfFields.value} />
  );
}