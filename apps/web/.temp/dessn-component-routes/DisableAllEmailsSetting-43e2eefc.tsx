import React from 'react';
import { useParentState } from '../useIframeState';
import { DisableAllEmailsSetting } from '../../../../packages/features/eventtypes/components/tabs/advanced/DisableAllEmailsSetting';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    checked: {
      type: "boolean",
      value: false,
      label: "Checked",
    },
    recipient: {
      type: "dropdown",
      value: "attendees",
      options: ["attendees", "hosts"],
      label: "Recipient",
    },
  });

  const mockT = (key: string) => key;

  return (
    <DisableAllEmailsSetting
      checked={state.checked.value}
      onCheckedChange={(value) => setState("checked", value)}
      recipient={state.recipient.value as "attendees" | "hosts"}
      t={mockT}
    />
  );
}