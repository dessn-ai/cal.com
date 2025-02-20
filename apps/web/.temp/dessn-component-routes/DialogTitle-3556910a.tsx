import React from 'react';
import { useParentState } from '../useIframeState';
import { cn } from '../../../../packages/platform/atoms/src/lib/utils';

// Mock version of DialogTitle for preview purposes
const PreviewDialogTitle = ({ 
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-dialog-title",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "Dialog Title",
      label: "Title Text",
    },
  });

  return (
    <PreviewDialogTitle className={state.className.value}>
      {state.children.value}
    </PreviewDialogTitle>
  );
}