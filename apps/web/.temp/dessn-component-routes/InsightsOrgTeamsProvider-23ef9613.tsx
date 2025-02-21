import React from 'react';
import { useParentState } from '../useIframeState';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Child Component</div>",
      label: "Children",
    },
  });

  return (
    <InsightsOrgTeamsProvider>
      {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
    </InsightsOrgTeamsProvider>
  );
}