import React from 'react';
import { useParentState } from '../useIframeState';

// Create a simplified preview version that doesn't depend on Dialog context
const PreviewSheetHeader = ({
  showCloseButton,
  className,
  children
}: {
  showCloseButton?: boolean;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-start justify-between gap-x-4 pb-2">
      <div className={`mt-1 flex flex-col gap-y-1 ${className || ''}`}>
        {children}
      </div>
      {showCloseButton && (
        <button 
          className="aspect-square p-1 hover:bg-gray-100 rounded-sm"
          onClick={() => {}}
        >
          ✕
        </button>
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
    <div className="p-4 border rounded-md">
      <PreviewSheetHeader 
        showCloseButton={state.showCloseButton.value}
        className={state.className.value}
      >
        <div>Sample Header Content</div>
      </PreviewSheetHeader>
    </div>
  );
}