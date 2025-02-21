import React from 'react';
import { useParentState } from '../useIframeState';
import { ReassignDialog } from '../../components/dialog/ReassignDialog';

// Mock the search params context
const SearchParamsContext = React.createContext(null);

export const SearchParamsProvider = ({ children }) => {
  const mockSearchParams = new URLSearchParams();
  const setSearchParams = () => {};
  
  return (
    <SearchParamsContext.Provider value={[mockSearchParams, setSearchParams]}>
      {children}
    </SearchParamsContext.Provider>
  );
};

// Mock any required contexts from atoms
const MockAtomsContext = React.createContext({});

const MockAtomsProvider = ({ children }) => {
  const mockValue = {
    config: {},
    setConfig: () => {},
  };

  return (
    <MockAtomsContext.Provider value={mockValue}>
      {children}
    </MockAtomsContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Open Dialog",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    bookingId: {
      type: "number",
      value: 123,
      label: "Booking ID",
    },
    bookingFromRoutingForm: {
      type: "boolean",
      value: false,
      label: "Booking From Routing Form",
    },
  });

  return (
    <MockAtomsProvider>
      <SearchParamsProvider>
        <ReassignDialog
          isOpenDialog={state.isOpenDialog.value}
          setIsOpenDialog={(value) => setState('isOpenDialog', value)}
          teamId={state.teamId.value}
          bookingId={state.bookingId.value}
          bookingFromRoutingForm={state.bookingFromRoutingForm.value}
        />
      </SearchParamsProvider>
    </MockAtomsProvider>
  );
}