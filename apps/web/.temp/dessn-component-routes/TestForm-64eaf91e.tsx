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
        settings: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        _count: { responses: 0 },
        team: { slug: "team-slug", name: "Team Name" },
        connectedForms: [],
        routers: [],
        teamMembers: []
      },
      label: "Form"
    },
    showAllData: {
      type: "boolean",
      value: true,
      label: "Show All Data"
    },
    renderFooter: {
      type: "dropdown",
      value: "default",
      options: ["default", "custom"],
      label: "Render Footer"
    }
  });

  const renderFooter = state.renderFooter.value === "custom" 
    ? (onClose: () => void) => <div>Custom Footer <button onClick={onClose}>Close</button></div>
    : undefined;

  return (
    <ImportedComponent
      form={state.form.value}
      showAllData={state.showAllData.value}
      renderFooter={renderFooter}
    />
  );
}