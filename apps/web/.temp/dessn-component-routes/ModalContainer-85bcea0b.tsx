import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/ui/ModalContainer';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    wide: {
      type: "boolean",
      value: false,
      label: "Wide",
    },
    scroll: {
      type: "boolean",
      value: false,
      label: "Scroll",
    },
    noPadding: {
      type: "boolean",
      value: false,
      label: "No Padding",
    },
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open",
    },
  });

  return (
    <ImportedComponent
      wide={state.wide.value}
      scroll={state.scroll.value}
      noPadding={state.noPadding.value}
      isOpen={state.isOpen.value}
      onExit={() => setState('isOpen', false)}
    >
      <div>Modal Content</div>
    </ImportedComponent>
  );
}