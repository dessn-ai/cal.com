import React from 'react';
import { useParentState } from '../useIframeState';
import PageWrapper from "@components/PageWrapperAppDir";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Child Content</div>",
      label: "Children",
    },
  });

  return (
    <PageWrapper requiresLicense={false} nonce={undefined} themeBasis={null} dehydratedState={null}>
      {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
    </PageWrapper>
  );
}