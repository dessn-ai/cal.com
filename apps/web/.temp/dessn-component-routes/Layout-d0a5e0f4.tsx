import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the component with error handling
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/apps/categories/layout').catch(() => {
    // Fallback component in case of import error
    return ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
  }),
  {
    suspense: true,
  }
);

interface PreviewState {
  children: {
    type: string;
    value: string;
    label: string;
  };
}

export default function ComponentPreview() {
  const [state, setState] = useParentState<PreviewState>({
    children: {
      type: "string",
      value: "<div>Sample child content</div>",
      label: "Children",
    },
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="preview-wrapper">
        <ImportedComponent>
          <div dangerouslySetInnerHTML={{ __html: state.children.value }} />
        </ImportedComponent>
      </div>
    </Suspense>
  );
}