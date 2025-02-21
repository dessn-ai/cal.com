import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/sendgrid/pages/setup/index';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    api_key: {
      type: "string",
      value: "SG.xxxxxx...",
      label: "API Key",
    },
    testPassed: {
      type: "boolean",
      value: false,
      label: "Test Passed",
    },
    testLoading: {
      type: "boolean",
      value: false,
      label: "Test Loading",
    },
  });

  const form = useForm({
    defaultValues: {
      api_key: state.api_key.value,
    },
  });

  const mockRouter = {
    push: () => {},
    back: () => {},
  };

  const mockUseLocale = () => ({
    t: (key: string) => key,
  });

  return (
    <React.Fragment>
      <ImportedComponent />
    </React.Fragment>
  );
}