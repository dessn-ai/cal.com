import React from 'react';
import { useParentState } from '../useIframeState';
import { ConferencingAppsViewWebWrapper } from '../../../../packages/platform/atoms/connect/conferencing-apps/ConferencingAppsViewWebWrapper';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Conferencing Apps",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Manage your conferencing app integrations",
      label: "Description",
    },
    add: {
      type: "string",
      value: "Add Conferencing App",
      label: "Add Button Text",
    },
  });

  return (
    <ConferencingAppsViewWebWrapper
      title={state.title.value}
      description={state.description.value}
      add={state.add.value}
    />
  );
}