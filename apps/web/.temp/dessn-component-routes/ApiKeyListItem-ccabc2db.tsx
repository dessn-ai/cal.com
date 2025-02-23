import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/api-keys/components/ApiKeyListItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    apiKey: {
      type: "string",
      value: JSON.stringify({
        id: "1",
        note: "Test API Key",
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      }),
      label: "API Key",
    },
    lastItem: {
      type: "boolean",
      value: false,
      label: "Last Item",
    },
  });

  const apiKey = JSON.parse(state.apiKey.value);

  return (
    <ImportedComponent
      apiKey={apiKey}
      lastItem={state.lastItem.value}
      onEditClick={() => console.log("Edit clicked")}
    />
  );
}