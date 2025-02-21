import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/(main-nav)/availability/page';

import { ShellMainAppDir } from '../../app/(use-page-wrapper)/(main-nav)/ShellMainAppDir';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    heading: {
      type: "string",
      value: "Availability",
      label: "Heading",
    },
    subtitle: {
      type: "string",
      value: "Configure availability",
      label: "Subtitle",
    },
  });

  const mockGetTranslate = () => (key: string) => state[key as keyof typeof state]?.value || key;

  return (
    <ShellMainAppDir
      heading={state.heading.value}
      subtitle={state.subtitle.value}
      CTA={<div>Mock CTA</div>}
    >
      <ImportedComponent getTranslate={mockGetTranslate} />
    </ShellMainAppDir>
  );
}