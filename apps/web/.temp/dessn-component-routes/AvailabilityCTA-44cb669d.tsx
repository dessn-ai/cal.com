import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/availability/availability-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currentOrg: {
      type: "dropdown",
      value: "null",
      options: ["null", "orgObject"],
      label: "Current Organization",
    },
  });

  const currentOrg = state.currentOrg.value === "null" ? null : { isOrganization: true, isPrivate: false, user: { role: "ADMIN" } };

  return <ImportedComponent currentOrg={currentOrg} />;
}