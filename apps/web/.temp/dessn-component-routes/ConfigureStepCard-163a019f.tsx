import React from 'react';
import { useParentState } from '../useIframeState';
import { ConfigureStepCard } from '../../components/apps/installation/ConfigureStepCard';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "example-slug",
      label: "Slug",
    },
    userName: {
      type: "string",
      value: "John Doe",
      label: "User Name",
    },
    categories: {
      type: "dropdown",
      value: "calendar",
      options: ["calendar", "video", "messaging"],
      label: "Categories",
    },
    credentialId: {
      type: "number",
      value: 1,
      label: "Credential ID",
    },
    loading: {
      type: "boolean",
      value: false,
      label: "Loading",
    },
    isConferencing: {
      type: "boolean",
      value: false,
      label: "Is Conferencing",
    },
  });

  const formPortalRef = React.useRef<HTMLDivElement>(null);

  return (
    <ConfigureStepCard
      slug={state.slug.value}
      userName={state.userName.value}
      categories={[state.categories.value]}
      credentialId={state.credentialId.value}
      loading={state.loading.value}
      isConferencing={state.isConferencing.value}
      formPortalRef={formPortalRef}
      eventTypeGroups={[]}
      setConfigureStep={() => {}}
      handleSetUpLater={() => {}}
    />
  );
}