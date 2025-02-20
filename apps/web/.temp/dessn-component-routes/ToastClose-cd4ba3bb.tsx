import React from 'react';
import { useParentState } from '../useIframeState';
import { ToastClose } from '../../../../packages/platform/atoms/src/components/ui/toast';

import { ToastProvider, Toast } from '@radix-ui/react-toast';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <ToastProvider>
      <Toast>
        <ToastClose className={state.className.value} />
      </Toast>
    </ToastProvider>
  );
}