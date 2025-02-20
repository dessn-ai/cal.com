import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/components/SingleForm';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    form: {
      type: "object",
      value: {
        id: "123",
        name: "Sample Form",
        description: "This is a sample form",
        teamId: 1,
        routes: [],
        fields: [],
        settings: {
          sendUpdatesTo: [],
          sendToAll: false,
        },
        _count: {
          responses: 0,
        },
        team: {
          name: "Sample Team",
          slug: "sample-team",
        },
        teamMembers: [],
      },
      label: "Form",
    },
    isTestPreviewOpen: {
      type: "boolean",
      value: true,
      label: "Is Test Preview Open",
    },
  });

  return (
    <ImportedComponent
      form={state.form.value}
      isTestPreviewOpen={state.isTestPreviewOpen.value}
      setIsTestPreviewOpen={(value) => setState("isTestPreviewOpen", value)}
    />
  );
}