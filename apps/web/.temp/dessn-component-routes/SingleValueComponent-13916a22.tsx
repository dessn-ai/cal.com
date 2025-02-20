import React from 'react';
import { useParentState } from '../useIframeState';

// Simplified version of SingleValueComponent for preview
const PreviewSingleValue = ({ data }) => {
  const { label, subtitle } = data;
  return (
    <div className="flex space-x-1">
      <p>{label}</p>
      <p className="text-subtle">{subtitle}</p>
    </div>
  );
};

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

  return (
    <div className="border p-4 rounded">
      <PreviewSingleValue data={option} />
    </div>
  );
}