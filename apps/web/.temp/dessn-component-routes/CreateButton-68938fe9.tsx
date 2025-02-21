import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateButton } from '../../../../packages/ui/components/createButton/CreateButton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    options: {
      type: "dropdown",
      value: JSON.stringify([
        {
          teamId: null,
          label: "Personal",
          image: "https://example.com/personal.png",
          slug: "personal"
        },
        {
          teamId: 1,
          label: "Team A",
          image: "https://example.com/teamA.png",
          slug: "team-a"
        }
      ]),
      options: ["[]", "[{\"teamId\":null,\"label\":\"Personal\",\"image\":\"https://example.com/personal.png\",\"slug\":\"personal\"},{\"teamId\":1,\"label\":\"Team A\",\"image\":\"https://example.com/teamA.png\",\"slug\":\"team-a\"}]"],
      label: "Options"
    },
    buttonText: {
      type: "string",
      value: "Create New",
      label: "Button Text"
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending"
    },
    disableMobileButton: {
      type: "boolean",
      value: false,
      label: "Disable Mobile Button"
    },
    subtitle: {
      type: "string",
      value: "Create a new item",
      label: "Subtitle"
    },
    color: {
      type: "dropdown",
      value: "primary",
      options: ["primary", "secondary", "minimal", "destructive"],
      label: "Button Color"
    }
  });

  return (
    <CreateButton
      options={JSON.parse(state.options.value)}
      buttonText={state.buttonText.value}
      isPending={state.isPending.value}
      disableMobileButton={state.disableMobileButton.value}
      subtitle={state.subtitle.value}
      color={state.color.value as any}
      createFunction={() => console.log("Create function called")}
    />
  );
}