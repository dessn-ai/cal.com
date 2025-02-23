import React from 'react';
import { useParentState } from '../useIframeState';
import { Slider } from '../../../../packages/ui/components/apps/Slider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Sample Slider",
      label: "Title",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    items: {
      type: "string",
      value: JSON.stringify(["Item 1", "Item 2", "Item 3"]),
      label: "Items",
    },
  });

  const items = JSON.parse(state.items.value);

  return (
    <Slider
      title={state.title.value}
      className={state.className.value}
      items={items}
      itemKey={(item) => item}
      renderItem={(item) => <div>{item}</div>}
      options={{
        perView: 3,
        gap: 20,
      }}
    />
  );
}