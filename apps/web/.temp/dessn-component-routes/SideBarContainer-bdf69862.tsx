import React from 'react';
import { useParentState } from '../useIframeState';
import { SideBarContainer } from '../../../../packages/features/shell/SideBar';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    bannersHeight: {
      type: "number",
      value: 0,
      label: "Banners Height",
    },
    isPlatformUser: {
      type: "boolean",
      value: false,
      label: "Is Platform User",
    },
  });

  return (
    <SideBarContainer
      bannersHeight={state.bannersHeight.value}
      isPlatformUser={state.isPlatformUser.value}
    />
  );
}