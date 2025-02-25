import React from 'react';
import { useParentState } from '../useIframeState';

// Mock Next.js Head component
const Head = ({ children }) => {
  React.useEffect(() => {
    // Update document title when Head component is rendered
    if (children && React.isValidElement(children) && children.props.children) {
      document.title = children.props.children;
    }
  }, [children]);
  return null;
};

// Create the actual component implementation here instead of importing
function RouterComponent({ form, message, isEmbed }) {
  return (
    <>
      <Head>
        <title>{form.name} | Cal.com Forms</title>
      </Head>
      <div className="mx-auto my-0 max-w-3xl md:my-24">
        <div className="w-full max-w-4xl ltr:mr-2 rtl:ml-2">
          <div className="text-default bg-default -mx-4 rounded-sm border border-neutral-200 p-4 py-6 sm:mx-0 sm:px-8">
            <div>{message}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    formName: {
      type: "string",
      value: "Sample Form",
      label: "Form Name",
    },
    message: {
      type: "string",
      value: "Welcome to the router page",
      label: "Message",
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
  });

  const mockForm = {
    name: state.formName.value,
    id: 1,
    description: "Sample form description",
    userId: "user-1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return (
    <div className="preview-wrapper">
      <RouterComponent
        form={mockForm}
        message={state.message.value}
        isEmbed={state.isEmbed.value}
      />
    </div>
  );
}