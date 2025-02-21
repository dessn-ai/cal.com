import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/team/[slug]/[type]/embed';

import PageWrapper from "@components/PageWrapper";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
  });

  // Mock the inferSSRProps<typeof getServerSideProps> part of PageProps
  const mockSSRProps = {
    // Add any necessary props here that would typically come from getServerSideProps
    // This is a placeholder and should be adjusted based on the actual SSR props
    slug: "team-slug",
    type: "event-type",
  };

  return (
    <PageWrapper>
      <ImportedComponent 
        {...mockSSRProps}
        isEmbed={state.isEmbed.value}
      />
    </PageWrapper>
  );
}