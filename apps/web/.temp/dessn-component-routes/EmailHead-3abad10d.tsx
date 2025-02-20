import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/emails/src/components/EmailHead';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Email Preview",
      label: "Title",
    },
  });

  return (
    <ImportedComponent title={state.title.value} />
  );
}