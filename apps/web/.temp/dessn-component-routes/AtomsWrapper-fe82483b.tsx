import React from 'react';
import { useParentState } from '../useIframeState';
import { AtomsWrapper } from '../../../../packages/platform/atoms/src/components/atoms-wrapper';

import { useAtomsContext } from '../../../../packages/platform/atoms/src/hooks/useAtomsContext';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    customClassName: {
      type: "string",
      value: "",
      label: "Custom Class Name"
    },
    readingDirection: {
      type: "dropdown",
      value: "ltr",
      options: ["ltr", "rtl"],
      label: "Reading Direction"
    }
  });

  const AtomsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const options = {
      readingDirection: state.readingDirection.value as "ltr" | "rtl"
    };
    return <useAtomsContext.Provider value={{ options }}>{children}</useAtomsContext.Provider>;
  };

  return (
    <AtomsContextProvider>
      <AtomsWrapper customClassName={state.customClassName.value}>
        <div>Sample content inside AtomsWrapper</div>
      </AtomsWrapper>
    </AtomsContextProvider>
  );
}