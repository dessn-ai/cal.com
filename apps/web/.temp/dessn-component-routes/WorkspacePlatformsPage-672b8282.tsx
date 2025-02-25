import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/admin/WorkspacePlatformPage';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isDialogOpen: {
      type: "boolean",
      value: false,
      label: "Is Dialog Open",
    },
    editingPlatform: {
      type: "dropdown",
      value: "none",
      options: ["none", "platform1", "platform2"],
      label: "Editing Platform",
    },
  });

  const methods = useForm();

  const mockWorkspacePlatforms = [
    { id: 1, name: "Platform 1", slug: "platform1", enabled: true, description: "Description 1" },
    { id: 2, name: "Platform 2", slug: "platform2", enabled: false, description: "Description 2" },
  ];

  return (
    <ImportedComponent
      workspacePlatforms={mockWorkspacePlatforms}
      onAdd={() => console.log("Add clicked")}
      onEdit={() => console.log("Edit clicked")}
      onToggle={() => console.log("Toggle clicked")}
      isOpen={state.isDialogOpen.value}
      onOpenChange={(open) => setState("isDialogOpen", open)}
      editingPlatform={state.editingPlatform.value === "none" ? null : mockWorkspacePlatforms.find(p => p.slug === state.editingPlatform.value)}
      isCreate={state.editingPlatform.value === "none"}
      platform={mockWorkspacePlatforms[0]}
      platformId={1}
      platforms={mockWorkspacePlatforms}
    />
  );
}