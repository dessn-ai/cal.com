import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteAttributeModal } from '../../../../packages/features/ee/organizations/pages/settings/attributes/DeleteAttributeModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    attributeToDelete: {
      type: "object",
      value: {
        id: "attr123",
        name: "Sample Attribute",
        slug: "sample-attribute",
        type: "text",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        teamId: 1,
        enabled: true,
        isWeightsEnabled: false,
        usersCanEditRelation: true,
        isLocked: false,
        options: [
          {
            slug: "option1",
            value: "Option 1",
            id: "opt1",
            contains: [],
            attributeId: "attr123",
            isGroup: false,
          },
        ],
      },
      label: "Attribute to Delete",
    },
  });

  const setAttributeToDelete = (value: any) => {
    setState('attributeToDelete', value);
  };

  return (
    <DeleteAttributeModal
      attributeToDelete={state.attributeToDelete.value}
      setAttributeToDelete={setAttributeToDelete}
    />
  );
}