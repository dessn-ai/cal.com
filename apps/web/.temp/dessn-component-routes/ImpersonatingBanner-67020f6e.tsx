import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/impersonation/components/ImpersonatingBanner';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    data: {
      type: 'string',
      value: JSON.stringify({
        user: {
          impersonatedBy: {
            id: 1,
            role: 'ADMIN'
          },
          username: 'JohnDoe',
          org: {
            id: 123
          }
        }
      }),
      label: 'Session Data'
    }
  });

  const parsedData = JSON.parse(state.data.value);

  return <ImportedComponent data={parsedData} />;
}