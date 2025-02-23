import React from 'react';
import { useParentState } from '../useIframeState';
import PageWrapper from "@components/PageWrapperAppDir";

// Create a simplified version of the layout for preview
const PreviewPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper 
      requiresLicense={false} 
      nonce={undefined}
      themeBasis={null} 
      dehydratedState={{}}
    >
      {children}
    </PageWrapper>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Child Content</div>",
      label: "Children",
    },
  });

  return (
    <PreviewPageWrapper>
      {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
    </PreviewPageWrapper>
  );
}