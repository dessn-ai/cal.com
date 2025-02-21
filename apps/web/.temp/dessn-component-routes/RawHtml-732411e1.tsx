import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/emails/src/components/RawHtml';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    html: {
      type: "string",
      value: "<p>This is some sample HTML content</p>",
      label: "HTML Content",
    },
  });

  return <ImportedComponent html={state.html.value} />;
}