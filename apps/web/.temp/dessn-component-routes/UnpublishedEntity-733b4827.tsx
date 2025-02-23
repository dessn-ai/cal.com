import React from 'react';
import { useParentState } from '../useIframeState';
import { UnpublishedEntity } from '../../../../packages/ui/components/unpublished-entity/UnpublishedEntity';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamSlug: {
      type: "string",
      value: "my-team",
      label: "Team Slug",
    },
    orgSlug: {
      type: "string",
      value: "",
      label: "Organization Slug",
    },
    logoUrl: {
      type: "string",
      value: "https://example.com/logo.png",
      label: "Logo URL",
    },
    name: {
      type: "string",
      value: "My Team",
      label: "Name",
    },
  });

  return (
    <UnpublishedEntity
      teamSlug={state.teamSlug.value || null}
      orgSlug={state.orgSlug.value || null}
      logoUrl={state.logoUrl.value || null}
      name={state.name.value || null}
    />
  );
}