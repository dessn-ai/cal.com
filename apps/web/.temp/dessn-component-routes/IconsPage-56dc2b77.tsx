import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/icons/page';

import { IconSprites } from "@calcom/ui";

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <>
      <IconSprites />
      <ImportedComponent />
    </>
  );
}