import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/CreateEventTypeForm';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Quick Chat",
      label: "Title",
    },
    slug: {
      type: "string",
      value: "quick-chat",
      label: "Slug",
    },
    description: {
      type: "string",
      value: "A quick video meeting",
      label: "Description",
    },
    length: {
      type: "number",
      value: 15,
      label: "Duration (minutes)",
    },
    isManagedEventType: {
      type: "boolean",
      value: false,
      label: "Is Managed Event Type",
    },
    pageSlug: {
      type: "string",
      value: "user",
      label: "Page Slug",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    urlPrefix: {
      type: "string",
      value: "https://cal.com",
      label: "URL Prefix",
    },
  });

  const form = useForm<{
    title: string;
    slug: string;
    description: string;
    length: number;
  }>({
    defaultValues: {
      title: state.title.value,
      slug: state.slug.value,
      description: state.description.value,
      length: state.length.value,
    },
  });

  const handleSubmit = (values: any) => {
    console.log('Form submitted:', values);
  };

  const SubmitButton = (isPending: boolean) => (
    <button type="submit" disabled={isPending}>
      {isPending ? 'Submitting...' : 'Submit'}
    </button>
  );

  return (
    <ImportedComponent
      form={form}
      isManagedEventType={state.isManagedEventType.value}
      handleSubmit={handleSubmit}
      pageSlug={state.pageSlug.value}
      isPending={state.isPending.value}
      urlPrefix={state.urlPrefix.value}
      SubmitButton={SubmitButton}
    />
  );
}