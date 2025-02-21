import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/card/FormCard';

import { Badge } from '../../../../packages/ui/components/badge';
import { Icon } from '../../../../packages/ui/components/icon';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Sample Form Card",
      label: "Label",
    },
    isLabelEditable: {
      type: "boolean",
      value: false,
      label: "Is Label Editable",
    },
    badgeText: {
      type: "string",
      value: "Sample Badge",
      label: "Badge Text",
    },
    badgeVariant: {
      type: "dropdown",
      value: "default",
      options: ["default", "warning", "orange", "success", "green", "gray", "blue", "red", "error", "purple"],
      label: "Badge Variant",
    },
  });

  return (
    <ImportedComponent
      label={state.label.value}
      isLabelEditable={state.isLabelEditable.value}
      onLabelChange={(newLabel) => setState('label', newLabel)}
      deleteField={{
        check: () => true,
        fn: () => console.log("Delete field clicked"),
      }}
      moveUp={{
        check: () => true,
        fn: () => console.log("Move up clicked"),
      }}
      moveDown={{
        check: () => true,
        fn: () => console.log("Move down clicked"),
      }}
      badge={{
        text: state.badgeText.value,
        variant: state.badgeVariant.value,
      }}
    >
      <div className="p-4">
        <p>This is the content of the FormCard</p>
        <Badge variant="default" className="mt-2">
          Sample Badge
        </Badge>
        <Icon name="calendar" className="text-default h-4 w-4 mt-2" />
      </div>
    </ImportedComponent>
  );
}