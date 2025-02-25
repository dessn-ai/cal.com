import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/ics-feedcalendar/pages/setup/index';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    urls: {
      type: "string",
      value: "https://example.com/calendar.ics",
      label: "Calendar URL",
    },
    skipWriting: {
      type: "boolean",
      value: false,
      label: "Skip Writing to Calendar",
    },
  });

  const form = useForm({
    defaultValues: {},
  });

  const mockRouter = {
    push: () => {},
    back: () => {},
  };

  const mockT = (key: string) => key;

  return (
    <ImportedComponent />
  );
}