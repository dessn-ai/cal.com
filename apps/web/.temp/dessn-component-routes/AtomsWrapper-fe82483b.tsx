import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';

// Mock the atoms context
type AtomsContextType = {
  options: {
    readingDirection: 'ltr' | 'rtl';
  };
};

const AtomsContext = createContext<AtomsContextType | undefined>(undefined);

// Mock the atoms wrapper component
const AtomsWrapper: React.FC<{ customClassName?: string; children: React.ReactNode }> = ({ 
  customClassName, 
  children 
}) => {
  const atomsContext = useContext(AtomsContext);
  
  return (
    <div 
      className={customClassName} 
      dir={atomsContext?.options.readingDirection}
    >
      {children}
    </div>
  );
};

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