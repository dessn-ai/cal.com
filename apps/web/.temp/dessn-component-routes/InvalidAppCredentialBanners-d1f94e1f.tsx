import React from 'react';
import { useParentState } from '../useIframeState';
import { InvalidAppCredentialBanners } from '../../../../packages/features/users/components/InvalidAppCredentialsBanner';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    data: {
      type: "string",
      value: JSON.stringify([
        { name: "Google Calendar", slug: "google-calendar" },
        { name: "Zoom", slug: "zoom" }
      ]),
      label: "Invalid App Credential Banners Data"
    }
  });

  const parsedData = JSON.parse(state.data.value);

  return (
    <InvalidAppCredentialBanners
      data={parsedData}
    />
  );
}