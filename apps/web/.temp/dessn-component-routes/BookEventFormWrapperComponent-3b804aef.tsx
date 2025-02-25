import React from 'react';
import { useParentState } from '../useIframeState';
import { BookEventFormWrapperComponent } from '../../../../packages/features/bookings/Booker/components/BookEventForm/BookFormAsModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onCancel: {
      type: "string",
      value: "() => console.log('Cancel clicked')",
      label: "onCancel",
    },
    child: {
      type: "string",
      value: "<div>Form content goes here</div>",
      label: "Child content",
    },
    eventLength: {
      type: "number",
      value: 60,
      label: "Event Length (minutes)",
    },
  });

  const onCancel = new Function(`return ${state.onCancel.value}`)();
  const child = <div dangerouslySetInnerHTML={{ __html: state.child.value }} />;

  return (
    <BookEventFormWrapperComponent
      onCancel={onCancel}
      child={child}
      eventLength={state.eventLength.value}
    />
  );
}