import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/SettingsLayoutAppDirClient';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Content</div>",
      label: "Children",
    },
    currentOrg: {
      type: "string",
      value: "null",
      label: "Current Organization",
    },
    otherTeams: {
      type: "string",
      value: "null",
      label: "Other Teams",
    },
    containerClassName: {
      type: "string",
      value: "",
      label: "Container Class Name",
    },
  });

  return (
    <ImportedComponent
      children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
      currentOrg={state.currentOrg.value === "null" ? null : JSON.parse(state.currentOrg.value)}
      otherTeams={state.otherTeams.value === "null" ? null : JSON.parse(state.otherTeams.value)}
      containerClassName={state.containerClassName.value}
    />
  );
}