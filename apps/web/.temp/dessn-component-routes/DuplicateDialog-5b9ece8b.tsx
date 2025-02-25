import React from 'react';
import { useParentState } from '../useIframeState';
import { DuplicateDialog } from '../../../../packages/features/eventtypes/components/DuplicateDialog';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Sample Event",
      label: "Title",
    },
    description: {
      type: "string",
      value: "This is a sample event description.",
      label: "Description",
    },
    slug: {
      type: "string",
      value: "sample-event",
      label: "Slug",
    },
    id: {
      type: "number",
      value: 1,
      label: "ID",
    },
    length: {
      type: "number",
      value: 30,
      label: "Length (minutes)",
    },
    pageSlug: {
      type: "string",
      value: "user",
      label: "Page Slug",
    },
    teamId: {
      type: "number",
      value: null,
      label: "Team ID",
    },
    parentId: {
      type: "number",
      value: null,
      label: "Parent ID",
    },
  });

  // Mock the necessary context and hooks
  const mockRouter = {
    replace: () => Promise.resolve(),
  };

  const mockTrpc = {
    useUtils: () => ({
      viewer: {
        eventTypes: {
          getUserEventGroups: {
            invalidate: () => Promise.resolve(),
          },
          getEventTypesFromGroup: {
            invalidate: () => Promise.resolve(),
          },
        },
      },
    }),
    viewer: {
      eventTypes: {
        duplicate: {
          useMutation: () => ({
            mutate: () => {},
            isPending: false,
          }),
        },
      },
    },
  };

  return (
    <React.Fragment>
      <DuplicateDialog />
    </React.Fragment>
  );
}