import React from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';

// Mock types
type AppCategories = "calendar" | "video" | "messaging";

type EventTypeGroup = {
  id: number;
  slug: string;
  image?: string;
  eventTypes: any[];
};

// Simplified mock version of ConfigureStepCard
const MockConfigureStepCard = ({
  slug,
  userName,
  categories,
  credentialId,
  loading,
  isConferencing,
  formPortalRef,
  eventTypeGroups,
  setConfigureStep,
  handleSetUpLater
}: {
  slug: string;
  userName: string;
  categories: AppCategories[];
  credentialId?: number;
  loading?: boolean;
  isConferencing: boolean;
  formPortalRef: React.RefObject<HTMLDivElement>;
  eventTypeGroups: EventTypeGroup[];
  setConfigureStep: (value: boolean) => void;
  handleSetUpLater: () => void;
}) => {
  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-bold mb-4">Configure {categories[0]}</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Slug</label>
          <div className="mt-1">{slug}</div>
        </div>
        <div>
          <label className="block text-sm font-medium">User Name</label>
          <div className="mt-1">{userName}</div>
        </div>
        <div>
          <label className="block text-sm font-medium">Category</label>
          <div className="mt-1">{categories.join(', ')}</div>
        </div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setConfigureStep(false)}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Save'}
          </button>
          <button
            className="px-4 py-2 border rounded"
            onClick={handleSetUpLater}
          >
            Set Up Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "example-slug",
      label: "Slug",
    },
    userName: {
      type: "string",
      value: "John Doe",
      label: "User Name",
    },
    categories: {
      type: "dropdown",
      value: "calendar",
      options: ["calendar", "video", "messaging"],
      label: "Categories",
    },
    credentialId: {
      type: "number",
      value: 1,
      label: "Credential ID",
    },
    loading: {
      type: "boolean",
      value: false,
      label: "Loading",
    },
    isConferencing: {
      type: "boolean",
      value: false,
      label: "Is Conferencing",
    },
  });

  const formPortalRef = React.useRef<HTMLDivElement>(null);
  
  const methods = useForm({
    defaultValues: {
      eventTypeGroups: []
    }
  });

  return (
    <FormProvider {...methods}>
      <div ref={formPortalRef} />
      <MockConfigureStepCard
        slug={state.slug.value}
        userName={state.userName.value}
        categories={[state.categories.value as AppCategories]}
        credentialId={state.credentialId.value}
        loading={state.loading.value}
        isConferencing={state.isConferencing.value}
        formPortalRef={formPortalRef}
        eventTypeGroups={[]}
        setConfigureStep={() => {}}
        handleSetUpLater={() => {}}
      />
    </FormProvider>
  );
}