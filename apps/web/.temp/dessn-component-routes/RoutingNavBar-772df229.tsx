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

  const hookForm = useForm<any>({
    defaultValues: {
      id: state.formId.value,
      name: "Sample Form",
      description: "A sample routing form",
    },
  });

  const [showInfoLostDialog, setShowInfoLostDialog] = React.useState(false);

  const form = {
    id: state.formId.value,
    name: "Sample Form",
    description: "A sample routing form",
  };

  return (
    <ImportedComponent
      form={form}
      appUrl={state.appUrl.value}
      hookForm={hookForm}
      setShowInfoLostDialog={setShowInfoLostDialog}
    />
  );
}