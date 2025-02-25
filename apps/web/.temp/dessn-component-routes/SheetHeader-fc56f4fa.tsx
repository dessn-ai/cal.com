import React from 'react';
import { useParentState } from '../useIframeState';
import { Button } from '../../../../packages/ui/components/button';
import classNames from '@calcom/lib/classNames';

// Mock version of SheetHeader for preview
const PreviewSheetHeader = ({
  children,
  className,
  showCloseButton = true,
  ...props
}) => {
  return (
    <div className="flex items-start justify-between gap-x-4 pb-2" {...props}>
      <div className={classNames("mt-1 flex flex-col gap-y-1", className)}>{children}</div>
      {showCloseButton && (
        <Button 
          variant="icon" 
          StartIcon="x" 
          color="minimal" 
          className="aspect-square p-1"
          onClick={() => {}}
        />
      )}
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showCloseButton: {
      type: "boolean",
      value: true,
      label: "Show Close Button"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <PreviewSheetHeader 
      showCloseButton={state.showCloseButton.value}
      className={state.className.value}
    >
      <div>Sample Header Content</div>
    </PreviewSheetHeader>
  );
}