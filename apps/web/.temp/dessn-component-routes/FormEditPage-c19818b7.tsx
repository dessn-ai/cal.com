import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/form-edit/[...appPages]';
import { useForm, FormProvider } from 'react-hook-form';

// Create a mock OrgBrandingProvider that just returns the mock values
const MockOrgBrandingProvider = ({ children }) => {
  const mockContext = {
    orgBranding: {
      logo: "",
      brandColor: "",
      darkBrandColor: "",
      theme: null,
      backgroundImage: null,
    },
    hostname: "",
    orgSlug: "",
    hideBranding: false,
  };

  // Create a mock context to avoid the actual provider
  return (
    <div data-testid="mock-org-branding" data-context={JSON.stringify(mockContext)}>
      {children}
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appUrl: {
      type: "string",
      value: "https://example.com",
      label: "App URL",
    },
  });

  // Mock form data with required structure
  const mockForm = {
    id: "test-form-id",
    name: "Test Form",
    description: "Test form description",
    fields: [
      {
        id: "field1",
        type: "text",
        label: "First Name",
        identifier: "firstName",
        required: true
      }
    ],
    settings: {
      emailOwnerOnSubmission: false,
      sendUpdatesTo: [],
      sendToAll: false
    },
    routes: [],
    teamMembers: [],
    routers: [],
    connectedForms: [],
    _count: {
      responses: 0
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    disabled: false,
    responseCount: 0,
    position: 0
  };

  const methods = useForm({
    defaultValues: mockForm
  });

  // Create a simplified version of the component without all the providers
  return (
    <MockOrgBrandingProvider>
      <FormProvider {...methods}>
        <div className="w-full">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{mockForm.name}</h1>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Form Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={mockForm.name}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={mockForm.description || ''}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
    </MockOrgBrandingProvider>
  );
}