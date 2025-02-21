import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterSelect } from '../../../../packages/ui/components/filter-select/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Filter",
      label: "Title",
    },
    selectedValue: {
      type: "string",
      value: "",
      label: "Selected Value",
    },
    buttonIcon: {
      type: "string",
      value: "filter",
      label: "Button Icon",
    },
    placeholder: {
      type: "string",
      value: "Search...",
      label: "Placeholder",
    },
    emptyText: {
      type: "string",
      value: "No results found",
      label: "Empty Text",
    },
    testId: {
      type: "string",
      value: "filter-select",
      label: "Test ID",
    },
  });

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleChange = (value: string | number | null) => {
    setState("selectedValue", value as string);
  };

  return (
    <FilterSelect
      title={state.title.value}
      options={options}
      selectedValue={state.selectedValue.value}
      onChange={handleChange}
      buttonIcon={state.buttonIcon.value as any}
      placeholder={state.placeholder.value}
      emptyText={state.emptyText.value}
      testId={state.testId.value}
    />
  );
}