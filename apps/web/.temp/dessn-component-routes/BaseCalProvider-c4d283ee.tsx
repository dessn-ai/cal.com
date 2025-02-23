import React from 'react';
import { useParentState } from '../useIframeState';
import { BaseCalProvider } from '../../../../packages/platform/atoms/cal-provider/BaseCalProvider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    clientId: {
      type: "string",
      value: "example-client-id",
      label: "Client ID",
    },
    accessToken: {
      type: "string",
      value: "example-access-token",
      label: "Access Token",
    },
    apiUrl: {
      type: "string",
      value: "https://api.example.com",
      label: "API URL",
    },
    refreshUrl: {
      type: "string",
      value: "https://refresh.example.com",
      label: "Refresh URL",
    },
    readingDirection: {
      type: "dropdown",
      value: "ltr",
      options: ["ltr", "rtl"],
      label: "Reading Direction",
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
      value: 1,
      label: "Organization ID",
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
  });

  return (
    <BaseCalProvider
      clientId={state.clientId.value}
      accessToken={state.accessToken.value}
      options={{
        apiUrl: state.apiUrl.value,
        refreshUrl: state.refreshUrl.value,
        readingDirection: state.readingDirection.value as "ltr" | "rtl",
      }}
      autoUpdateTimezone={state.autoUpdateTimezone.value}
      language={state.language.value as "en" | "fr" | "pt-BR" | "de" | "es" | "nl"}
      organizationId={state.organizationId.value}
      isEmbed={state.isEmbed.value}
    >
      {/* Add child components here if needed */}
    </BaseCalProvider>
  );
}