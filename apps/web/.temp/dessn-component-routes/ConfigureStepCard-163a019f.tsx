import React from 'react';
import { useParentState } from '../useIframeState';
import { Form } from '@calcom/ui';
import { useForm, FormProvider, useFormContext, useFieldArray } from 'react-hook-form';

// Mock the necessary types
type AppCategories = "calendar" | "video" | "other";

// Mock the EventType interface
interface TEventType {
  id: number;
  title: string;
  slug: string;
  team?: { slug: string };
  metadata?: Record<string, any>;
  locations?: any[];
  bookingFields?: any[];
  seatsPerTimeSlot?: number;
  selected?: boolean;
}

// Mock the EventTypeGroup interface
interface TEventTypeGroup {
  eventTypes: TEventType[];
  slug: string;
  image?: string;
}

// Mock the form type
type TEventTypesForm = {
  eventTypeGroups: TEventTypeGroup[];
};

// Mock Components
const EventTypeAppSettingsWrapper = ({ slug, eventType, categories, credentialId }) => {
  return (
    <div className="p-4">
      <h3>App Settings for {slug}</h3>
      <p>Mock settings component</p>
    </div>
  );
};

const EventTypeConferencingAppSettings = ({ slug, eventType, categories, credentialId }) => {
  return (
    <div className="p-4">
      <h3>Conferencing Settings for {slug}</h3>
      <p>Mock conferencing settings</p>
    </div>
  );
};

// Mock the ConfigureStepCard component
const ConfigureStepCard = ({
  slug,
  userName,
  categories,
  credentialId,
  loading,
  isConferencing,
  formPortalRef,
  eventTypeGroups,
  setConfigureStep,
  handleSetUpLater,
}) => {
  return (
    <div className="mt-8">
      {eventTypeGroups.map((group, index) => (
        <div key={index}>
          <div className="mb-2 mt-4 flex items-center">
            <div className="inline-flex justify-center">
              {/* Mock Avatar */}
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
            </div>
            <p className="block pl-2">{group.slug}</p>
          </div>
          {group.eventTypes.map((eventType) => (
            <div key={eventType.id} className="relative border p-4 rounded-md mb-4">
              <div>
                <span className="font-semibold">{eventType.title}</span>
                <small className="text-gray-500 hidden sm:inline">
                  /{eventType.team ? eventType.team.slug : userName}/{eventType.slug}
                </small>
              </div>
              {isConferencing ? (
                <EventTypeConferencingAppSettings
                  slug={slug}
                  eventType={eventType}
                  categories={categories}
                  credentialId={credentialId}
                />
              ) : (
                <EventTypeAppSettingsWrapper
                  slug={slug}
                  eventType={eventType}
                  categories={categories}
                  credentialId={credentialId}
                />
              )}
            </div>
          ))}
        </div>
      ))}
      <button
        className="w-full justify-center p-2 mt-6 bg-black text-white rounded-md"
        type="button"
        data-testid="configure-step-save"
        disabled={loading}>
        Save
      </button>
      <div className="flex w-full flex-row justify-center">
        <button
          onClick={(event) => {
            event.preventDefault();
            handleSetUpLater();
          }}
          className="mt-8 cursor-pointer px-4 py-2 text-sm font-medium text-gray-600">
          Set up later
        </button>
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
      options: ["calendar", "video", "other"],
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
  const formMethods = useForm<TEventTypesForm>({
    defaultValues: {
      eventTypeGroups: [{
        slug: "default-group",
        eventTypes: [{
          id: 1,
          title: "Default Event Type",
          slug: "default-event",
          selected: true,
          metadata: {},
          locations: [],
          bookingFields: [],
        }],
      }],
    },
  });

  return (
    <FormProvider {...formMethods}>
      <div ref={formPortalRef}>
        <form id="outer-event-type-form">
          <ConfigureStepCard
            slug={state.slug.value}
            userName={state.userName.value}
            categories={[state.categories.value as AppCategories]}
            credentialId={state.credentialId.value}
            loading={state.loading.value}
            isConferencing={state.isConferencing.value}
            formPortalRef={formPortalRef}
            eventTypeGroups={formMethods.getValues().eventTypeGroups}
            setConfigureStep={() => {}}
            handleSetUpLater={() => {}}
          />
        </form>
      </div>
    </FormProvider>
  );
}