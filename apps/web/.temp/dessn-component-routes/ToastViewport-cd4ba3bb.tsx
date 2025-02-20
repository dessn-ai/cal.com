import React from 'react';
import { useParentState } from '../useIframeState';
import { 
  ToastViewport,
  Provider as ToastPrimitiveProvider,
  Viewport as ToastPrimitiveViewport
} from '@radix-ui/react-toast';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <div className="relative">
      <ToastPrimitiveProvider>
        <ToastPrimitiveViewport 
          className={`fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] ${state.className.value}`}
        />
      </ToastPrimitiveProvider>
    </div>
  );
}