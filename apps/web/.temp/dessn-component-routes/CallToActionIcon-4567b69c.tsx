import React from 'react';
import { useParentState } from '../useIframeState';
import { CallToActionIcon } from '../../../../packages/emails/src/components/CallToActionIcon';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    iconName: {
      type: "string",
      value: "calendar",
      label: "Icon Name",
    },
    styleWidth: {
      type: "string",
      value: "1rem",
      label: "Width",
    },
    styleHeight: {
      type: "string",
      value: "1rem",
      label: "Height",
    },
    styleMarginLeft: {
      type: "string",
      value: "0.5rem",
      label: "Margin Left",
    },
  });

  const style = {
    width: state.styleWidth.value,
    height: state.styleHeight.value,
    marginLeft: state.styleMarginLeft.value,
  };

  return <CallToActionIcon iconName={state.iconName.value} style={style} />;
}