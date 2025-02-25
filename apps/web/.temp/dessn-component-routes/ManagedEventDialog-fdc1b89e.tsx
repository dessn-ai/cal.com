import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/dialogs/ManagedEventDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slugExistsChildrenDialogOpen: {
      type: "string",
      value: JSON.stringify([
        {
          value: "event-1",
          label: "Event 1",
          created: true,
          owner: {
            avatar: "https://example.com/avatar.jpg",
            id: 1,
            email: "user@example.com",
            name: "John Doe",
            username: "johndoe",
            membership: "MEMBER",
            eventTypeSlugs: ["event-1"],
            profile: {
              id: 1,
              upId: "up-1",
              username: "johndoe",
              organizationId: null,
              organization: null,
            },
          },
          slug: "event-1",
          hidden: false,
        },
      ]),
      label: "Slug Exists Children Dialog Open",
    },
    slug: {
      type: "string",
      value: "event-1",
      label: "Slug",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
  });

  const onOpenChange = () => {
    console.log("Dialog open state changed");
  };

  const onConfirm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Confirmed");
  };

  return (
    <ImportedComponent
      slugExistsChildrenDialogOpen={JSON.parse(state.slugExistsChildrenDialogOpen.value)}
      slug={state.slug.value}
      onOpenChange={onOpenChange}
      isPending={state.isPending.value}
      onConfirm={onConfirm}
    />
  );
}