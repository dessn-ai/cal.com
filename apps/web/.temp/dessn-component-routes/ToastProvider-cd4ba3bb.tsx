import React from 'react';
import { useParentState } from '../useIframeState';
import { ToastProvider } from '../../../../packages/platform/atoms/src/components/ui/toast';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    theme: {
      type: "dropdown",
      value: "light",
      options: ["light", "dark"],
      label: "Theme",
    },
  });

  return (
    <ToastProvider>
      {/* ToastProvider doesn't render any visible UI by itself */}
    </ToastProvider>
  );
}