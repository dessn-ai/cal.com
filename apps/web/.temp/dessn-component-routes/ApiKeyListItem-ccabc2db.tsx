import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/api-keys/components/ApiKeyListItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    apiKey: {
      type: "string",
      value: JSON.stringify({
        id: "api-key-1",
        note: "Test API Key",
        userId: 1,
        createdAt: new Date().toISOString(),
        teamId: null,
        appId: null,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        lastUsedAt: new Date().toISOString(),
        hashedKey: "hashed-key-123"
      }),
      label: "API Key"
    },
    lastItem: {
      type: "boolean",
      value: true,
      label: "Last Item"
    }
  });

  const apiKey = JSON.parse(state.apiKey.value);

  return (
    <ImportedComponent
      apiKey={{
        ...apiKey,
        createdAt: new Date(apiKey.createdAt),
        expiresAt: apiKey.expiresAt ? new Date(apiKey.expiresAt) : null,
        lastUsedAt: apiKey.lastUsedAt ? new Date(apiKey.lastUsedAt) : null
      }}
      lastItem={state.lastItem.value}
      onEditClick={() => console.log("Edit clicked")}
    />
  );
}