import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/zapier/components/TemplateCard';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    template: {
      type: "dropdown",
      value: JSON.stringify({
        icon: "zapier-icon.svg",
        app: "Zapier",
        text: "Connect Cal.com to thousands of apps",
        link: "https://zapier.com/apps/calcom/integrations"
      }),
      options: [
        JSON.stringify({
          icon: "zapier-icon.svg",
          app: "Zapier",
          text: "Connect Cal.com to thousands of apps",
          link: "https://zapier.com/apps/calcom/integrations"
        }),
        JSON.stringify({
          icon: "slack-icon.svg",
          app: "Slack",
          text: "Send meeting notifications to Slack",
          link: "https://zapier.com/apps/slack/integrations/calcom"
        })
      ],
      label: "Template"
    }
  });

  const template = JSON.parse(state.template.value);

  return <ImportedComponent template={template} />;
}