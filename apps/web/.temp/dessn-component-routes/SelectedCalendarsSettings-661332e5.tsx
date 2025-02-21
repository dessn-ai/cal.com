import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectedCalendarsSettings } from '../../../../packages/platform/atoms/selected-calendars/SelectedCalendarsSettings';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Calendar Settings Content",
      label: "Children",
    },
    classNames: {
      type: "string",
      value: "custom-class",
      label: "Class Names",
    },
  });

  return (
    <SelectedCalendarsSettings
      children={state.children.value}
      classNames={state.classNames.value}
    />
  );
}