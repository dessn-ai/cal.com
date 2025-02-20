import React from 'react';
import { useParentState } from '../useIframeState';
import { GoogleWorkspaceInviteButton } from '../../../../packages/features/ee/teams/components/GoogleWorkspaceInviteButton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onSuccess: {
      type: "string",
      value: "console.log('Success')",
      label: "On Success Function",
    },
  });

  const onSuccess = (data: string[]) => {
    // eslint-disable-next-line no-new-func
    const func = new Function('data', state.onSuccess.value);
    func(data);
  };

  return <GoogleWorkspaceInviteButton onSuccess={onSuccess} />;
}