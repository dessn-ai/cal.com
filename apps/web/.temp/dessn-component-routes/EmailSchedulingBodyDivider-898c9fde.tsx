import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/emails/src/components/EmailSchedulingBodyDivider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    headStyles: {
      type: "string",
      value: JSON.stringify({ color: 'blue', fontSize: '16px' }),
      label: "Head Styles",
    },
  });

  const parsedHeadStyles = state.headStyles.value ? JSON.parse(state.headStyles.value) : undefined;

  return <ImportedComponent headStyles={parsedHeadStyles} />;
}