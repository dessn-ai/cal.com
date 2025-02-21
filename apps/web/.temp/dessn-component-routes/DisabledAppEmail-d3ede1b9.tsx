import React from 'react';
import { useParentState } from '../useIframeState';
import { DisabledAppEmail } from '../../../../packages/emails/src/templates/DisabledAppEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appName: {
      type: "string",
      value: "Calendar App",
      label: "App Name",
    },
    appType: {
      type: "dropdown",
      value: "calendar",
      options: ["payment", "video", "calendar", "other"],
      label: "App Type",
    },
    title: {
      type: "string",
      value: "My Event Type",
      label: "Event Type Title",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
  });

  const mockT = (key: string, params?: Record<string, string>) => {
    return key + (params ? JSON.stringify(params) : '');
  };

  return (
    <DisabledAppEmail
      appName={state.appName.value}
      appType={[state.appType.value]}
      t={mockT}
      title={state.title.value}
      eventTypeId={state.eventTypeId.value}
    />
  );
}