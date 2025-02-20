import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/components/RoutingNavBar';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    formId: {
      type: "string",
      value: "form-123",
      label: "Form ID",
    },
    appUrl: {
      type: "string",
      value: "https://app.cal.com",
      label: "App URL",
    },
  });

  const mockForm = {
    id: state.formId.value,
    description: null,
    position: 1,
    routes: [],
    name: "Sample Form",
    userId: 1,
    teamId: null,
    disabled: false,
  };

  const hookForm = useForm<any>({
    defaultValues: mockForm,
  });

  return (
    <ImportedComponent
      form={mockForm}
      appUrl={state.appUrl.value}
      hookForm={hookForm}
      setShowInfoLostDialog={() => {}}
    />
  );
}