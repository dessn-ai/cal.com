import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { AtomsWrapper } from '../../../../packages/platform/atoms/src/components/atoms-wrapper';

// Create mock atoms context
type AtomsContextType = {
  options: {
    readingDirection: 'ltr' | 'rtl';
  };
};

const AtomsContext = createContext<AtomsContextType>({
  options: {
    readingDirection: 'ltr'
  }
});

// Mock the useAtomsContext hook
const useAtomsContext = () => useContext(AtomsContext);

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
    return <AtomsContext.Provider value={{ options }}>{children}</AtomsContext.Provider>;
  };

  return (
    <AtomsContextProvider>
      <AtomsWrapper customClassName={state.customClassName.value}>
        <div>Sample content inside AtomsWrapper</div>
      </AtomsWrapper>
    </AtomsContextProvider>
  );
}