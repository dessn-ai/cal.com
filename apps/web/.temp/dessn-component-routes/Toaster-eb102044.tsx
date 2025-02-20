import React from 'react';
import { useParentState } from '../useIframeState';
import { Toaster } from '../../../../packages/platform/atoms/src/components/ui/toaster';

import { ToastProvider } from '../../../../packages/platform/atoms/src/components/ui/toast';
import { useToast } from '../../../../packages/platform/atoms/src/components/ui/use-toast';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showToast: {
      type: "boolean",
      value: false,
      label: "Show Toast",
    },
    toastTitle: {
      type: "string",
      value: "Example Toast",
      label: "Toast Title",
    },
    toastDescription: {
      type: "string",
      value: "This is an example toast message.",
      label: "Toast Description",
    },
  });

  const { toast } = useToast();

  React.useEffect(() => {
    if (state.showToast.value) {
      toast({
        title: state.toastTitle.value,
        description: state.toastDescription.value,
      });
      setState('showToast', false);
    }
  }, [state.showToast.value]);

  return (
    <ToastProvider>
      <Toaster />
    </ToastProvider>
  );
}