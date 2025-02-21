import React from 'react';
import { useParentState } from '../useIframeState';
import { TroubleshooterListItemContainer } from '../../../../packages/features/troubleshooter/components/TroubleshooterListItemContainer';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Example Title",
      label: "Title",
    },
    subtitle: {
      type: "string",
      value: "Example Subtitle",
      label: "Subtitle",
    },
    prefixSlot: {
      type: "string",
      value: "<div>Prefix</div>",
      label: "Prefix Slot",
    },
    suffixSlot: {
      type: "string",
      value: "<div>Suffix</div>",
      label: "Suffix Slot",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <TroubleshooterListItemContainer
      title={state.title.value}
      subtitle={state.subtitle.value}
      prefixSlot={<div dangerouslySetInnerHTML={{ __html: state.prefixSlot.value }} />}
      suffixSlot={<div dangerouslySetInnerHTML={{ __html: state.suffixSlot.value }} />}
      className={state.className.value}
    >
      <div>Child content goes here</div>
    </TroubleshooterListItemContainer>
  );
}