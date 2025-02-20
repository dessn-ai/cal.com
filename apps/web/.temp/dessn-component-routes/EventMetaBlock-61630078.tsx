import React from 'react';
import { useParentState } from '../useIframeState';
import { EventMetaBlock } from '../../../../packages/features/bookings/components/event-meta/Details';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    customIcon: {
      type: "string",
      value: "",
      label: "Custom Icon",
    },
    icon: {
      type: "dropdown",
      value: "clock",
      options: ["clock", "calendar", "user", "location", "dollar-sign"],
      label: "Icon",
    },
    iconUrl: {
      type: "string",
      value: "",
      label: "Icon URL",
    },
    highlight: {
      type: "boolean",
      value: false,
      label: "Highlight",
    },
    contentClassName: {
      type: "string",
      value: "",
      label: "Content Class Name",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    isDark: {
      type: "boolean",
      value: false,
      label: "Is Dark",
    },
  });

  return (
    <EventMetaBlock
      customIcon={state.customIcon.value ? <div dangerouslySetInnerHTML={{ __html: state.customIcon.value }} /> : undefined}
      icon={state.icon.value as any}
      iconUrl={state.iconUrl.value}
      highlight={state.highlight.value}
      contentClassName={state.contentClassName.value}
      className={state.className.value}
      isDark={state.isDark.value}
    >
      Sample Event Meta Content
    </EventMetaBlock>
  );
}