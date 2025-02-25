import React from 'react';
import { useParentState } from '../useIframeState';
import { UserDropdown } from '../../../../packages/features/shell/user-dropdown/UserDropdown';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    small: {
      type: "boolean",
      value: false,
      label: "Small",
    },
  });

  return (
    <UserDropdown small={state.small.value} />
  );
}