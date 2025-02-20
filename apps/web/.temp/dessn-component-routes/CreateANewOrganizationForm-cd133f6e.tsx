import React from 'react';
import { useParentState } from '../useIframeState';
import { UserPermissionRole } from '@calcom/prisma/enums';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Form, TextField, Button, Alert } from '@calcom/ui';
import { useForm, Controller } from 'react-hook-form';
import { useLocale } from '@calcom/lib/hooks/useLocale';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mockSession: {
      type: 'boolean',
      value: true,
      label: 'Mock Session',
    },
  });

  const { t } = useLocale();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false, refetchOnWindowFocus: false },
    },
  });

  // Simplified version of the form
  function SimplifiedCreateOrgForm() {
    const [serverErrorMessage, setServerErrorMessage] = React.useState<string | null>(null);
    const formMethods = useForm({
      defaultValues: {
        name: '',
        slug: '',
        orgOwnerEmail: 'user@example.com',
      },
    });

    return (
      <Form
        form={formMethods}
        className="space-y-5"
        handleSubmit={(values) => {
          console.log('Form submitted:', values);
        }}>
        <div>
          {serverErrorMessage && (
            <div className="mb-4">
              <Alert severity="error" message={serverErrorMessage} />
            </div>
          )}
          <Controller
            name="orgOwnerEmail"
            control={formMethods.control}
            rules={{
              required: 'Email is required',
            }}
            render={({ field: { value } }) => (
              <div className="flex">
                <TextField
                  containerClassName="w-full"
                  placeholder="john@acme.com"
                  name="orgOwnerEmail"
                  label="Admin Email"
                  defaultValue={value}
                  onChange={(e) => {
                    formMethods.setValue("orgOwnerEmail", e?.target.value.trim());
                  }}
                />
              </div>
            )}
          />
        </div>

        <div>
          <Controller
            name="name"
            control={formMethods.control}
            rules={{
              required: 'Organization name is required',
            }}
            render={({ field: { value } }) => (
              <TextField
                className="mt-2"
                placeholder="Acme Inc"
                name="name"
                label="Organization Name"
                defaultValue={value}
                onChange={(e) => {
                  formMethods.setValue("name", e?.target.value.trim());
                }}
              />
            )}
          />
        </div>

        <div>
          <Controller
            name="slug"
            control={formMethods.control}
            rules={{
              required: 'Slug is required',
            }}
            render={({ field: { value } }) => (
              <TextField
                className="mt-2"
                name="slug"
                label="Organization URL"
                placeholder="acme"
                defaultValue={value}
                onChange={(e) => {
                  formMethods.setValue("slug", e?.target.value.trim());
                }}
              />
            )}
          />
        </div>

        <div className="flex space-x-2 rtl:space-x-reverse">
          <Button
            color="primary"
            EndIcon="arrow-right"
            type="submit"
            className="w-full justify-center">
            Continue
          </Button>
        </div>
      </Form>
    );
  }

  return (
    <div className="w-full max-w-[800px] mx-auto p-6">
      <QueryClientProvider client={queryClient}>
        <SimplifiedCreateOrgForm />
      </QueryClientProvider>
    </div>
  );
}