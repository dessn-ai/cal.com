import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/settings/SectionBottomActions';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    align: {
      type: "dropdown",
      value: "start",
      options: ["start", "end"],
      label: "Align",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <ImportedComponent
      align={state.align.value as "start" | "end"}
      className={state.className.value}
    >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sample Button
      </button>
    </ImportedComponent>
  );
}