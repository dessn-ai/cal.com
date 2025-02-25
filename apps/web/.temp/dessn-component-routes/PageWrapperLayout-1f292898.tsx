import React from 'react';
import { useParentState } from '../useIframeState';
import PageWrapper from "@components/PageWrapperAppDir";

// Mock component that simulates the layout functionality without the Next.js dependencies
const MockPageWrapperLayout = ({ children }: { children: React.ReactNode }) => {
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
    <MockPageWrapperLayout>
      {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
    </MockPageWrapperLayout>
  );
}