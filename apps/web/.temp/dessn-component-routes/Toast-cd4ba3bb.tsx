import React from 'react';
import { useParentState } from '../useIframeState';
import { 
  Toast, 
  ToastProvider, 
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose 
} from '../../../../packages/platform/atoms/src/components/ui/toast';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "default",
      options: ["default", "destructive"],
      label: "Variant",
    },
    title: {
      type: "string",
      value: "Toast Title",
      label: "Title",
    },
    description: {
      type: "string",
      value: "This is a toast message",
      label: "Description",
    },
  });

  return (
    <ToastProvider swipeDirection="right">
      <Toast variant={state.variant.value as "default" | "destructive"}>
        <div className="grid gap-1">
          <ToastTitle>{state.title.value}</ToastTitle>
          <ToastDescription>{state.description.value}</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}