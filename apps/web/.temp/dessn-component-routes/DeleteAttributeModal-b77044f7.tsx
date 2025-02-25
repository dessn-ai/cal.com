import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteAttributeModal } from '../../../../packages/features/ee/organizations/pages/settings/attributes/DeleteAttributeModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    attributeToDelete: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Sample Attribute",
        description: "This is a sample attribute",
        slug: "sample-attribute",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }),
      label: "Attribute to Delete",
    },
  });

  const attributeToDelete = JSON.parse(state.attributeToDelete.value);

  return (
    <DeleteAttributeModal
      attributeToDelete={attributeToDelete}
      setAttributeToDelete={() => {}}
    />
  );
}