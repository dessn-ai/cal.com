import React from 'react';
import { useParentState } from '../useIframeState';
import { ShellMainAppDirBackButton } from '../../app/(use-page-wrapper)/(main-nav)/ShellMainAppDirBackButton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    backPath: {
      type: "string",
      value: "/dashboard",
      label: "Back Path",
    },
  });

  return (
    <ShellMainAppDirBackButton
      backPath={state.backPath.value}
    />
  );
}