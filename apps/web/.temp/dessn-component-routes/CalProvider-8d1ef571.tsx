import React from 'react';
import { useParentState } from '../useIframeState';
import { CalProvider } from '../../../../packages/platform/atoms/cal-provider/CalProvider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    clientId: {
      type: "string",
      value: "your_client_id_here",
      label: "Client ID",
    },
    accessToken: {
      type: "string",
      value: "",
      label: "Access Token",
    },
    apiUrl: {
      type: "string",
      value: "https://api.cal.com/v2",
      label: "API URL",
    },
    refreshUrl: {
      type: "string",
      value: "",
      label: "Refresh URL",
    },
    autoUpdateTimezone: {
      type: "boolean",
      value: true,
      label: "Auto Update Timezone",
    },
    language: {
      type: "dropdown",
      value: "en",
      options: ["en", "fr", "pt-BR", "de", "es", "nl"],
      label: "Language",
    },
    organizationId: {
      type: "number",
      value: 0,
      label: "Organization ID",
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
  });

  return (
    <CalProvider
      clientId={state.clientId.value}
      accessToken={state.accessToken.value}
      options={{
        apiUrl: state.apiUrl.value,
        refreshUrl: state.refreshUrl.value,
      }}
      autoUpdateTimezone={state.autoUpdateTimezone.value}
      language={state.language.value as "en" | "fr" | "pt-BR" | "de" | "es" | "nl"}
      organizationId={state.organizationId.value}
      isEmbed={state.isEmbed.value}
    >
      {/* Child components would go here */}
      <div>Cal Provider is set up</div>
    </CalProvider>
  );
}