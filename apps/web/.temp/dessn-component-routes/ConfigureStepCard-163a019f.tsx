import React from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';

// Mock types and components
type AppCategories = "calendar" | "video" | "other";

// Mock Button component
const Button = ({ children, className, onClick, color, loading, type, ...props }) => (
  <button
    className={className}
    onClick={onClick}
    disabled={loading}
    type={type || "button"}
    {...props}>
    {children}
  </button>
);

// Mock Avatar component
const Avatar = ({ alt, imageSrc, size, className }) => (
  <div className={className}>
    <img src={imageSrc || "https://via.placeholder.com/40"} alt={alt} style={{ width: 40, height: 40 }} />
  </div>
);

// Mock Icon component
const Icon = ({ name, className, onClick }) => (
  <span className={className} onClick={onClick}>
    ✕
  </span>
);

// Mock Form component
const Form = ({ children, form, id, handleSubmit }) => (
  <form id={id} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
    {children}
  </form>
);

// Mock ConfigureStepCard component
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
  handleSetUpLater,
}) => {
  const methods = useForm({
    defaultValues: {
      eventTypeGroups: eventTypeGroups || [],
    },
  });

  return (
    formPortalRef?.current && (
      <div className="mt-8">
        <div className="sm:border-subtle bg-default relative border p-4 dark:bg-black sm:rounded-md">
          <div className="flex items-center">
            <Avatar
              alt=""
              size="md"
              className="inline-flex justify-center"
            />
            <p className="text-subtle block pl-2">{userName}</p>
          </div>
          
          <div className="mt-4">
            <span className="text-default font-semibold">Configuration</span>
            <p className="text-subtle mt-2">
              {isConferencing ? "Video conferencing settings" : "App settings"}
            </p>
          </div>
        </div>

        <Button
          className="text-md mt-6 w-full justify-center"
          type="button"
          onClick={() => setConfigureStep(false)}
          loading={loading}>
          Save
        </Button>

        <div className="flex w-full flex-row justify-center">
          <Button
            color="minimal"
            onClick={(event) => {
              event.preventDefault();
              handleSetUpLater();
            }}
            className="mt-8 cursor-pointer px-4 py-2 font-sans text-sm font-medium">
            Set up later
          </Button>
        </div>
      </div>
    )
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
  
  const methods = useForm({
    defaultValues: {
      eventTypeGroups: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <div ref={formPortalRef}>
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
      </div>
    </FormProvider>
  );
}