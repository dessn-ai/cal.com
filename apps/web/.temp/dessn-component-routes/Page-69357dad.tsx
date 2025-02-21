import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/(main-nav)/bookings/[status]/page';

import { ShellMainAppDir } from '../../app/(use-page-wrapper)/(main-nav)/ShellMainAppDir';
import BookingsList from '../../bookings/views/bookings-listing-view';

// Mock components and functions
const MockShellMainAppDir = ({ children }) => <div>{children}</div>;
const MockBookingsList = () => <div>Bookings List</div>;

jest.mock('../../app/(use-page-wrapper)/(main-nav)/ShellMainAppDir', () => ({
  ShellMainAppDir: MockShellMainAppDir,
}));
jest.mock('../../bookings/views/bookings-listing-view', () => MockBookingsList);
jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));
jest.mock('app/_utils', () => ({
  getTranslate: () => (key) => key,
}));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    status: {
      type: "dropdown",
      value: "upcoming",
      options: ["upcoming", "past", "cancelled", "unconfirmed"],
      label: "Status",
    },
  });

  const mockParams = {
    params: {
      status: state.status.value,
    },
    searchParams: {},
  };

  return <ImportedComponent {...mockParams} />;
}