import React from 'react';
import { useParentState } from '../useIframeState';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Avatar, Button, Form, Icon, ImageUploader, Label, TextAreaField } from '@calcom/ui';

// Create a simplified version of the form that doesn't rely on external hooks
const ModifiedAboutOrganizationForm = ({ orgId }: { orgId: string }) => {
  const [serverErrorMessage, setServerErrorMessage] = React.useState<string | null>(null);
  const [image, setImage] = React.useState("");

  const aboutOrganizationFormMethods = useForm<{
    logo: string;
    bio: string;
  }>();

  const handleSubmit = (values: any) => {
    console.log('Form submitted:', { ...values, orgId });
  };

  return (
    <Form
      form={aboutOrganizationFormMethods}
      className="space-y-5"
      handleSubmit={handleSubmit}>
      {serverErrorMessage && (
        <div>
          <Alert severity="error" message={serverErrorMessage} />
        </div>
      )}

      <div>
        <Controller
          control={aboutOrganizationFormMethods.control}
          name="logo"
          render={() => (
            <>
              <Label>organization_logo</Label>
              <div className="flex items-center">
                <Avatar
                  alt=""
                  fallback={<Icon.FiPlus className="text-subtle h-6 w-6" />}
                  className="items-center"
                  imageSrc={image}
                  size="lg"
                />
                <div className="ms-4">
                  <ImageUploader
                    target="avatar"
                    id="avatar-upload"
                    buttonMsg="upload"
                    handleAvatarChange={(newAvatar: string) => {
                      setImage(newAvatar);
                      aboutOrganizationFormMethods.setValue("logo", newAvatar);
                    }}
                    imageSrc={image}
                  />
                </div>
              </div>
            </>
          )}
        />
      </div>

      <div>
        <Controller
          control={aboutOrganizationFormMethods.control}
          name="bio"
          render={({ field: { value } }) => (
            <>
              <TextAreaField
                name="about"
                defaultValue={value}
                onChange={(e) => {
                  aboutOrganizationFormMethods.setValue("bio", e?.target.value);
                }}
              />
              <p className="text-subtle text-sm">organization_about_description</p>
            </>
          )}
        />
      </div>

      <div className="flex">
        <Button
          disabled={aboutOrganizationFormMethods.formState.isSubmitting}
          color="primary"
          EndIcon={Icon.FiArrowRight}
          type="submit"
          className="w-full justify-center">
          continue
        </Button>
      </div>
    </Form>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({
    orgId: {
      type: "string",
      value: "org123",
      label: "Organization ID",
    },
  });

  return (
    <ModifiedAboutOrganizationForm orgId={state.orgId.value} />
  );
}